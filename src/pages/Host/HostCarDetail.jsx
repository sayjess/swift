import React from "react"

import { Link, Outlet, useParams, NavLink} from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostCarDetail(){

    const [currentCar, setCurrentCar] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                if(data){
                    setCurrentCar(data)
                } else {
                    throw new Error(error)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    console.log(currentCar)

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all cars</span></Link>

            {currentCar && <div className="host-car-detail-layout-container">
                <div className="host-car-detail">
                    <img src={currentCar.imageUrl} />
                    <div className="host-car-detail-info-text">
                        <i
                            className={`car-type car-type-${currentCar.type}`}
                        >
                            {currentCar.type}
                        </i>
                        <h3>{currentCar.name}</h3>
                        <h4>${currentCar.price}/day</h4>
                    </div>
                </div>

                <nav className="host-car-detail-nav">
                    <NavLink 
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                    to=".">Details</NavLink>
                    <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null}
                    to="pricing">Pricing</NavLink>
                    <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null}
                    to="photos">Photos</NavLink>
                    
                </nav>
                <Outlet context={[currentCar]}/>
            </div>}
        </section>
    )
}