import React from "react"
import { useParams } from "react-router-dom"
export default function HostCarInfo() {
    const params = useParams()

    const [car, setCar] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.vans))
    }, [])
    
    
    return (
        <>
            {car && <p>Name: {car.name}</p>}
        </>
    )
}