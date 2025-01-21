import { CovCenBed } from "./CovCenBed"
import { CovCenDepartment } from "./CovCenDepartment"
import { CovCenDoctor } from "./CovCenDoctor"
import { CovCenWards } from "./CovCenWards"

export class CovCenPatient{

    covcen_patient_id !: number
    covcen_patient_name !: string
    covcenbed : CovCenBed = new CovCenBed() 
    covcendoctor : CovCenDoctor = new CovCenDoctor()
    covcendept : CovCenDepartment = new CovCenDepartment()
    covcenwards : CovCenWards = new CovCenWards()
}
