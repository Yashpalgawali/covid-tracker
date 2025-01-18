import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovCenWardType } from '../../../../../Models/CovCenWardType';
import { Router } from '@angular/router';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';

@Component({
  selector: 'app-viewcovcenwardtypes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './viewcovcenwardtypes.component.html',
  styleUrl: './viewcovcenwardtypes.component.css'
})
export class ViewcovcenwardtypesComponent implements  OnInit{

  response : any
  reserr   : any 
  covcenwardtypelist : CovCenWardType[] = []
  
  constructor(private router : Router, private covcenwardtypeserv : CovcenterwardtypeService){ }
  
  ngOnInit(): void {
     
    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response = ''
        sessionStorage.removeItem('response')
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.response = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ''
        sessionStorage.removeItem('reserr')
        
      }, 3000);
    }
     this.covcenwardtypeserv.getAllCovCenterWardTypes().subscribe({
      next:(data) =>{
        this.covcenwardtypelist = data
      },
    })
  }

  getCovCenterWardTypeById(wardtypeid : number) {
      this.router.navigate(['edit/covcenwardtype/',wardtypeid])
  }
}
