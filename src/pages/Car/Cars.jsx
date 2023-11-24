import { Link, useSearchParams } from "react-router-dom"
import React from "react"

/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */


export default function Cars(){

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [cars, setCars] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setCars(data.vans))
    }, [])


    const carElements = cars.filter(car => typeFilter ? car.type === typeFilter : true).map(car => (
        <div key={car.id} className="car-tile">
            <Link to={car.id} state={{ 
                    search: searchParams.toString(), 
                    type: typeFilter
                }}>
                <img src={car.imageUrl} />
                <div className="car-info">
                    <h3>{car.name}</h3>
                    <p>${car.price}<span>/day</span></p>
                </div>
                <i className={`car-type ${car.type} selected`}>{car.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }



    return (
        <div className="car-list-container">
            <h1>Explore our car options</h1>
            <div className="car-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`car-type simple ${typeFilter === "simple" ? "selected" : null}`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`car-type luxury ${typeFilter === "luxury" ? "selected" : null}`} 
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`car-type rugged ${typeFilter === "rugged" ? "selected" : null}`} 
                >
                    Rugged
                </button>
                {typeFilter && <button
                    onClick={() => handleFilterChange("type", null)}
                    className="car-type clear-filters" 
                >
                    Clear filter
                </button>}
            </div>
            <div className="car-list">
                {carElements}
            </div>
        </div>
    )
}