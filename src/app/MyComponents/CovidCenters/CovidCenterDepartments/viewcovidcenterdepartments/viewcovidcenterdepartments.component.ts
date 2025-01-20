import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovCenter } from '../../../../../Models/CovCenter';
import { CovidcenterService } from '../../../../Services/covidcenter.service';

@Component({
  selector: 'app-viewcovidcenterdepartments',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovidcenterdepartments.component.html',
  styleUrl: './viewcovidcenterdepartments.component.css'
})
export class ViewcovidcenterdepartmentsComponent implements OnInit{

covcendeptlist : CovCenDepartment[] = []
covcendeptlistfinal : CovCenDepartment[] = []
covncenter : CovCenter = new CovCenter()
response : any
reserr : any

  constructor(private router : Router,private covcendeptserv : CovidcenterdepartmentService,
              private covcenserv : CovidcenterService) { }
  ngOnInit(): void {

    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        this.response = ''
        sessionStorage.removeItem('response')        
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        this.reserr = ''
        sessionStorage.removeItem('reserr')
      }, 3000);
    }

    this.covcendeptserv.getAllCovCenterDepartments().subscribe({
      next:(data) => {
        this.covcendeptlist = data 
        this.covcendeptlist.forEach(dept => {
          if(typeof dept.covcenter === 'number') {

            this.covcenserv.getAllCovCenterById(dept.covcenter).subscribe({
              next: (covcenobj) => {
                  dept.covcenter = covcenobj
              },
            })
          }          
        })
      },
    })
  }

  getCovCenterDepartmentById(dept_id : number){
    
    this.router.navigate(['edit/covidcenterdepartment/',dept_id])
  }
}
