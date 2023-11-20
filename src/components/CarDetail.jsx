import React from "react"
import { useParams } from "react-router-dom"


export default function CarDetail() {
    const [car, setCar] = React.useState(null)
    const params = useParams()
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.vans))
    }, [])

    return(
        <div className="car-detail-container">
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