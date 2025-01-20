import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenBed } from '../../../Models/CovCenBed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidcenterbedService {

 base_url = GlobalComponent.base_url;
   app_url = this.base_url+'covcenbed/'
   constructor(private http : HttpClient) { }
 
 
   public saveCovCenterBed(covcen : CovCenBed):Observable<CovCenBed> {
     return this.http.post<CovCenBed>(`${this.app_url}`,covcen)
   }
   
   public getAllCovCenterBeds():Observable<CovCenBed[]> {
     return this.http.get<CovCenBed[]>(`${this.app_url}`)
   }
 
   public getAllCovCenterBedById(covcenBedid : number):Observable<CovCenBed> {
     return this.http.get<CovCenBed>(`${this.app_url}${covcenBedid}`)
   }
 
   public updateCovCenterBed(covcen : CovCenBed):Observable<CovCenBed> {
     return this.http.put<CovCenBed>(`${this.app_url}`,covcen)
   }
}
