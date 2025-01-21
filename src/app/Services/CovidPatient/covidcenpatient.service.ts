import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenPatient } from '../../../Models/CovCenPatient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidcenpatientService {

    base_url = GlobalComponent.base_url;
    app_url = this.base_url+'covcenpatient/'
    constructor(private http : HttpClient) { }
  
    public saveCovCenPatient(covcen : CovCenPatient):Observable<CovCenPatient> {
      return this.http.post<CovCenPatient>(`${this.app_url}`,covcen)
    }
    
    public getAllCovCenPatients():Observable<CovCenPatient[]> {
      return this.http.get<CovCenPatient[]>(`${this.app_url}`)
    }
  
    public getAllCovCenPatientById(covcenid : number):Observable<CovCenPatient> {
      return this.http.get<CovCenPatient>(`${this.app_url}${covcenid}`)
    }
  
    public updateCovCenPatient(covcen : CovCenPatient):Observable<CovCenPatient> {
      return this.http.put<CovCenPatient>(`${this.app_url}`,covcen)
    }
}
