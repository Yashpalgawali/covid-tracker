import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenWards } from '../../../Models/CovCenWards';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovcenwardService {
 
  base_url = GlobalComponent.base_url;
    app_url = this.base_url+'covcenward/'
    constructor(private http : HttpClient) { }
  
  
    public saveCovCenterWard(covcen : CovCenWards):Observable<CovCenWards> {
      return this.http.post<CovCenWards>(`${this.app_url}`,covcen)
    }
    
    public getAllCovCenterWards():Observable<CovCenWards[]> {
      return this.http.get<CovCenWards[]>(`${this.app_url}`)
    }
  
    public getAllCovCenterWardsByWardtype(wardtype : number):Observable<CovCenWards[]> {
      return this.http.get<CovCenWards[]>(`${this.app_url}wardtype/${wardtype}`)
    }

    public getAllCovCenterWardsByDepartmentId(dept_id : number):Observable<CovCenWards[]> {
      return this.http.get<CovCenWards[]>(`${this.app_url}department/${dept_id}`)
    }

    public getCovCenterWardById(covcenwardid : number):Observable<CovCenWards> {
      return this.http.get<CovCenWards>(`${this.app_url}${covcenwardid}`)
    }
  
    public updateCovCenterWard(covcen : CovCenWards):Observable<CovCenWards> {
      return this.http.put<CovCenWards>(`${this.app_url}`,covcen)
    }
}
