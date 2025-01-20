import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovCenDoctor } from '../../../Models/CovCenDoctor';

@Injectable({
  providedIn: 'root'
})
export class CovidCenterDoctorService {
  base_url = GlobalComponent.base_url;
  app_url = this.base_url+'covcendoc/'
  constructor(private http : HttpClient) { }

  public saveCovCenDoctor(covcen : CovCenDoctor):Observable<CovCenDoctor> {
    return this.http.post<CovCenDoctor>(`${this.app_url}`,covcen)
  }
  
  public getAllCovCenDoctors():Observable<CovCenDoctor[]> {
    return this.http.get<CovCenDoctor[]>(`${this.app_url}`)
  }

  public getAllCovCenDoctorById(covcenid : number):Observable<CovCenDoctor> {
    return this.http.get<CovCenDoctor>(`${this.app_url}${covcenid}`)
  }

  public updateCovCenDoctor(covcen : CovCenDoctor):Observable<CovCenDoctor> {
    return this.http.put<CovCenDoctor>(`${this.app_url}`,covcen)
  }
}
