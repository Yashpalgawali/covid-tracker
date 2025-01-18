import { CovCenDepartment } from "./CovCenDepartment"
import { CovCenWardType } from "./CovCenWardType"

export class CovCenWards{

    covcenward_id !: number
    covcenwardnum !: string
    covcenwardtype : CovCenWardType = new CovCenWardType()
    covcendept : CovCenDepartment = new CovCenDepartment() 

}