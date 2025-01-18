import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../../GlobalComponent';
import { CovCenWardType } from '../../../Models/CovCenWardType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovcenterwardtypeService {

  base_url = GlobalComponent.base_url;
  app_url = this.base_url+'covcenwardtype/'
  constructor(private http : HttpClient) { }


  public saveCovCenterWardType(covcen : CovCenWardType):Observable<CovCenWardType> {
    return this.http.post<CovCenWardType>(`${this.app_url}`,covcen)
  }
  
  public getAllCovCenterWardTypes():Observable<CovCenWardType[]> {
    return this.http.get<CovCenWardType[]>(`${this.app_url}`)
  }

  public getAllCovCenterWardTypeById(covcenwardtypeid : number):Observable<CovCenWardType> {
    return this.http.get<CovCenWardType>(`${this.app_url}${covcenwardtypeid}`)
  }

  public updateCovCenterWardType(covcen : CovCenWardType):Observable<CovCenWardType> {
    return this.http.put<CovCenWardType>(`${this.app_url}`,covcen)
  }
}
