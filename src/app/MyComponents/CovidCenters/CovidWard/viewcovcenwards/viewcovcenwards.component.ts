import { Component, OnInit } from '@angular/core';
import { CovcenwardService } from '../../../../Services/CovidCenWardService/covcenward.service';
import { Router, RouterLink } from '@angular/router';
import { CovCenWards } from '../../../../../Models/CovCenWards';
import { CommonModule } from '@angular/common';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';

@Component({
  selector: 'app-viewcovcenwards',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcenwards.component.html',
  styleUrl: './viewcovcenwards.component.css'
})
export class ViewcovcenwardsComponent implements OnInit{

  response : any
  reserr : any
  covcenwardlist : CovCenWards[] =[]
  constructor( private covcenwardserv : CovcenwardService,private router : Router,
               private covcendeptserv : CovidcenterdepartmentService,private covcenwardtypeserv : CovcenterwardtypeService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('response')!=null){
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response = ''
        sessionStorage.removeItem('response')
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null){
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ''
        sessionStorage.removeItem('reserr')
      }, 3000);
    }

    this.covcenwardserv.getAllCovCenterWards().subscribe({
      next : (data) => {
        this.covcenwardlist = data
        this.covcenwardlist.forEach(wards => {
            if(typeof  wards.covcendept === 'number') {
              this.covcendeptserv.getCovCenterDepartmentByDepartmentId(wards.covcendept).subscribe({
                next:(deptobj) => {
                    wards.covcendept = deptobj
                },
              })
            }
            if(typeof wards.covcenwardtype === 'number') {
              this.covcenwardtypeserv.getAllCovCenterWardTypeById(wards.covcenwardtype).subscribe({
                next : (wardtypeobj) => {
                    wards.covcenwardtype = wardtypeobj
                },
              })
            }
        })
        
      },
    })
  }

  getCovCenWardById(wardid : number)
  {
    this.router.navigate(['edit/covcenward/',wardid])
  }
}
