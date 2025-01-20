import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidCenterDoctorService } from '../../../../Services/CovidDoctor/covid-center-doctor.service';
import { CovCenDoctor } from '../../../../../Models/CovCenDoctor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';

@Component({
  selector: 'app-addcovcendoctor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovcendoctor.component.html',
  styleUrl: './addcovcendoctor.component.css'
})
export class AddcovcendoctorComponent implements OnInit{

  covcendoc : CovCenDoctor = new CovCenDoctor()
  covcendeptlist : CovCenDepartment[] = []
  component_name : any
  doc_id : any
  constructor(private router  : Router,private covcendocserv : CovidCenterDoctorService,
            private route : ActivatedRoute,private covcendeptserv : CovidcenterdepartmentService){}
  ngOnInit(): void {
      this.doc_id = this.route.snapshot.params['doc_id']

      if(this.doc_id!=null) {
        this.component_name = 'Update Doctor Details'
          this.covcendocserv.getAllCovCenDoctorById(this.doc_id).subscribe({
            next: (data) => {
                this.covcendoc = data
            },
          })
      }else {
        this.component_name = 'Add Doctor Details'
      }
      this.covcendeptserv.getAllCovCenterDepartments().subscribe({
        next:(data) =>{
          this.covcendeptlist = data
        },
      })
  }

  onSubmit(){
    if(this.covcendoc.covcendocid==null) {
      this.covcendocserv.saveCovCenDoctor(this.covcendoc).subscribe({
        next:(data) => {
          sessionStorage.setItem('response','Doctor saved successfully')
          this.router.navigate(['viewcovcendoctors'])
        },
        error : (err) =>{
          sessionStorage.setItem('response','Doctor is not saved ')
          this.router.navigate(['viewcovcendoctors'])
        }
      })
    }
    else {

    }
  }
}
