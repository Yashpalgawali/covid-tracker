import { CovCenDepartment } from "./CovCenDepartment"

export class CovCenDoctor{
    covcendocid !: number
    covcendocname!: string
    covcendept : CovCenDepartment = new CovCenDepartment()
}