import { useParams } from "react-router-dom"

export default function Details() {
    const params = useParams()
    return(
        <>
            details {params.id} page
        </>
    )
}