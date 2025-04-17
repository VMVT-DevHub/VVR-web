import { useParams } from "react-router-dom"

export const MedicineDetail = () => {

    const { id } = useParams()
    return (
        <>{id}</>
    )
}