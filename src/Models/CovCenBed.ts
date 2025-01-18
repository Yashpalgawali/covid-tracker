import { CovCenWards } from "./CovCenWards"

export class CovCenBed {
    covcenbed_id !: number
    covcenbed_num !: string
    covcenward : CovCenWards = new CovCenWards() 
}