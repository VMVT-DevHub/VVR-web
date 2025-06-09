import { HomePage } from "../pages/HomePage"
import { MedicineDetail } from "../pages/MedicineDetail"

export const slugs = {
    medicineSearch: '/',
    medicineDetail: (id:string) => `vaistas/${id}`
}

export enum Ids {
    ID = ':id'
}

export const routes = [
    {
        path: slugs.medicineSearch,
        element: <HomePage />
    },
    {
        path: slugs.medicineDetail(Ids.ID),
        element: <MedicineDetail />
    }
]