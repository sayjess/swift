import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"


export default function CarDetail() {
    const [car, setCar] = React.useState(null)
    const params = useParams()
    const location = useLocation()
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.vans))
    }, [])

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