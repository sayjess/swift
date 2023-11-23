import { useParams } from "react-router-dom"

export default function Photos() {
    const params = useParams()
    return(
        <>
            photos {params.id} page
        </>
    )
}