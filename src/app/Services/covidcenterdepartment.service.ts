import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenDepartment } from '../../Models/CovCenDepartment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidcenterdepartmentService {

   base_url = GlobalComponent.base_url;
    app_url = this.base_url+'covcendept/'
    constructor(private http : HttpClient) { }
  
   public saveCovCenterDepartment(covcendept : CovCenDepartment):Observable<CovCenDepartment> {
      return this.http.post<CovCenDepartment>(`${this.app_url}`,covcendept)
    }
    
    public getAllCovCenterDepartments():Observable<CovCenDepartment[]> {
      return this.http.get<CovCenDepartment[]>(`${this.app_url}`)
    }
  
    public getCovCenterDepartmentByDepartmentId(covcendeptid : number):Observable<CovCenDepartment> {
      return this.http.get<CovCenDepartment>(`${this.app_url}${covcendeptid}`)
    }

    public getAllCovCenDepartmentsByCovCenter(covcenid : number):Observable<CovCenDepartment[]> {
      return this.http.get<CovCenDepartment[]>(`${this.app_url}covcen/${covcenid}`)
    }
  
    public updateCovCenter(covcen : CovCenDepartment):Observable<CovCenDepartment> {
      return this.http.put<CovCenDepartment>(`${this.app_url}`,covcen)
    }

    
}
