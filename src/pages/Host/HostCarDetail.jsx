import React from "react"

import { Link, useParams} from "react-router-dom"

export default function HostCarDetail(){

    const [currentCar, setCurrentCar] = React.useState(null)
    const params = useParams()
    

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentCar(data.vans))
    }, [])



    if (!currentCar) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all cars</span></Link>

            <div className="host-car-detail-layout-container">
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
            </div>
        </section>
    )
}