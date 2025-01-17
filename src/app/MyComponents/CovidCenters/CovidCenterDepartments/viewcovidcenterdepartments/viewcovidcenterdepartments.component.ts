import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';

@Component({
  selector: 'app-viewcovidcenterdepartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcovidcenterdepartments.component.html',
  styleUrl: './viewcovidcenterdepartments.component.css'
})
export class ViewcovidcenterdepartmentsComponent implements OnInit{

covcendeptlist : CovCenDepartment[] = []
response : any
reserr : any

  constructor(private router : Router,private covcendeptserv : CovidcenterdepartmentService){ }
  ngOnInit(): void {

    if(sessionStorage.getItem('response')!=null) {
      this.response = sessionStorage.getItem('response')
      setTimeout(() => {
        sessionStorage.removeItem('response')
        this.response = ' '
      }, 3000);
    }

    if(sessionStorage.getItem('reserr')!=null) {
      this.reserr = sessionStorage.getItem('reserr')
      setTimeout(() => {
        sessionStorage.removeItem('reserr')
        this.reserr = ' '
      }, 3000);
    }

    this.covcendeptserv.getAllCovCenterDepartments().subscribe({
      next:(data) => {
        this.covcendeptlist = data 
        console.log(JSON.stringify(data))
      },
    })
  }

  getCovCenterDepartmentById(dept_id : number){
    this.router.navigate(['edit/covidcenterdepartment/',dept_id])
  }
}
