import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getVans } from "../../api"


export default function CarDetail() {
    const [car, setCar] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const params = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(params.id)
                if(data){
                    setCar(data)
                }
                else {
                    throw new Error(error)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [params.id])

    

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    // just to handle the back button incase there is no state/the state name is changed
    const prevUrl = location.state?.search || ""

    const type = location.state?.type || "all"

    return(
        <div className="car-detail-container">
            <Link
                to={`../?${prevUrl}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} cars</span></Link>

            {car ? (
                <div className="car-detail">
                    <img src={car.imageUrl} />
                    <i className={`car-type ${car.type} selected`}>{car.type}</i>
                    <h2>{car.name}</h2>
                    <p className="car-price"><span>${car.price}</span>/day</p>
                    <p>{car.description}</p>
                    <button className="link-button">Rent this car</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}