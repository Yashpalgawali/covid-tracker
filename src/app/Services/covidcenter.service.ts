import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenter } from '../../Models/CovCenter';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CovidcenterService {

  base_url = GlobalComponent.base_url;
  app_url = this.base_url+'covcen/'
  constructor(private http : HttpClient) { }


  public saveCovCenter(covcen : CovCenter):Observable<CovCenter> {
    return this.http.post<CovCenter>(`${this.app_url}`,covcen)
  }
  
  public getAllCovCenters():Observable<CovCenter[]> {
    return this.http.get<CovCenter[]>(`${this.app_url}`)
  }

  public getAllCovCenterById(covcenid : number):Observable<CovCenter> {
    return this.http.get<CovCenter>(`${this.app_url}${covcenid}`)
  }

  public updateCovCenter(covcen : CovCenter):Observable<CovCenter> {
    return this.http.put<CovCenter>(`${this.app_url}`,covcen)
  }
}
