import { useOutletContext } from "react-router-dom"

export default function HostCarPhotos(){
    const [currentCar] = useOutletContext()
    return (
        <img src={currentCar.imageUrl} className="host-car-detail-image" />
    )
}