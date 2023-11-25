import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostCars() {
    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                if(data){
                    setCars(data)
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
    }, [])

    const hostCarsEls = cars && cars.map(car => (
        <Link
            to={car.id}
            key={car.id}
            className="host-car-link-wrapper"
        >
            <div className="host-car-single" key={car.id}>
                <img src={car.imageUrl} alt={`Photo of ${car.name}`} />
                <div className="host-car-info">
                    <h3>{car.name}</h3>
                    <p>${car.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <h1 className="host-cars-title">Your listed cars</h1>
            <div className="host-cars-list">
                {
                    cars && cars.length > 0 ? (
                        <section>
                            {hostCarsEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}