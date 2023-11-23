import { useParams } from "react-router-dom"

export default function Pricing() {
    const params = useParams()
    return(
        <>
            pricing {params.id} page
        </>
    )
}