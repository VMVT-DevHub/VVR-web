import { HomePage } from "../Pages/HomePage"
import { MedicineDetail } from "../Pages/MedicineDetail"

export const slugs = {
    medicineSearch: '/',
    medicineDetail: (id:string) => `/${id}`
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