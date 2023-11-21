import { Link } from "react-router-dom"
import React from "react"

/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */


export default function Cars(){

    const [cars, setCars] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setCars(data.vans))
    }, [])


    const carElements = cars.map(car => (
        <div key={car.id} className="car-tile">
            <Link to={`/cars/${car.id}`}>
                <img src={car.imageUrl} />
                <div className="car-info">
                    <h3>{car.name}</h3>
                    <p>${car.price}<span>/day</span></p>
                </div>
                <i className={`car-type ${car.type} selected`}>{car.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="car-list-container">
            <h1>Explore our car options</h1>
            <div className="car-list">
                {carElements}
            </div>
        </div>
    )
}