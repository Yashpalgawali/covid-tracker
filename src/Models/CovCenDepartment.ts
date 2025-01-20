import { CovCenter } from "./CovCenter"
import { CovCenWards } from "./CovCenWards"

export class CovCenDepartment{
    covcendeptid !: number
    covcendeptname !: string
    covcenter : CovCenter = new CovCenter()
    covcenwards : CovCenWards[]=[]

}