import React from "react"
import { useParams } from "react-router-dom"

export default function HostCarPricing(){
    const params = useParams()

    const [car, setCar] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.vans))
    }, [])

    console.log(car)
    return (
        <>
            {car.price}
        </>
    )
}