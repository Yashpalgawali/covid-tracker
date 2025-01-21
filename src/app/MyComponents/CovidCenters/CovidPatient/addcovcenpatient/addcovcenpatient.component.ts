import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidcenpatientService } from '../../../../Services/CovidPatient/covidcenpatient.service';
import { CovidCenterDoctorService } from '../../../../Services/CovidDoctor/covid-center-doctor.service';
import { CovCenPatient } from '../../../../../Models/CovCenPatient';
import { CovCenDoctor } from '../../../../../Models/CovCenDoctor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';
import { CovCenBed } from '../../../../../Models/CovCenBed';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovidcenterbedService } from '../../../../Services/CovidCenBedService/covidcenterbed.service';
import { CovCenWards } from '../../../../../Models/CovCenWards';
import { CovcenwardService } from '../../../../Services/CovidCenWardService/covcenward.service';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';
import { CovidcenterService } from '../../../../Services/covidcenter.service';

@Component({
  selector: 'app-addcovcenpatient',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovcenpatient.component.html',
  styleUrl: './addcovcenpatient.component.css'
})
export class AddcovcenpatientComponent implements OnInit {

  covcenpatient : CovCenPatient = new CovCenPatient()
  covcendoclist : CovCenDoctor[] = []
  covcendeptlist : CovCenDepartment[] = []
  covcenbedlist : CovCenBed[] = []
  covcenwardlist : CovCenWards [] = []
  
  covcendept : CovCenDepartment = new CovCenDepartment()
  component_name : any
  patient_id : any

  constructor(private router : Router, private covcenpatientserv : CovidcenpatientService,
              private covcenwardserv : CovcenwardService, private covcendocserv :CovidCenterDoctorService,
              private route : ActivatedRoute, private covcendeptserv : CovidcenterdepartmentService,
              private covcenbedserv : CovidcenterbedService,private covcenterserv : CovidcenterService){ }
  ngOnInit(): void {
    
    this.patient_id = this.route.snapshot.params['patient_id']
    
    if(this.patient_id != null){
      this.component_name = 'Update Covid Center Patient'
      this.covcenpatientserv.getAllCovCenPatientById(this.patient_id).subscribe({
        next:(data) => {
            this.covcenpatient = data
        },
      })
    }
    else {
      this.component_name = 'Add Covid Center Patient'
    }

    this.covcendeptserv.getAllCovCenterDepartments().subscribe({
      next:(data) => {
          this.covcendeptlist = data
          
      },
    })
  }
  onSubmit() {

    console.log(this.covcenpatient)
    // if(this.covcenpatient.covcen_patient_id == null) {
    //   this.covcenpatientserv.saveCovCenPatient(this.covcenpatient).subscribe({
    //     next: (data) => {
    //         sessionStorage.setItem('response','Patient is saved successfully')
    //         this.router.navigate(['viewcovcenpatients'])
    //     },
    //   })
    // }
    
    
    // if(this.covcenpatient.covcen_patient_id != null) {
    //   this.covcenpatientserv.updateCovCenPatient(this.covcenpatient).subscribe({
    //     next: (data) => {
    //       sessionStorage.setItem('response','Patient is updated successfully')
    //       this.router.navigate(['viewcovcenpatients'])
    //   },
    //   error: (err) => {
    //     sessionStorage.setItem('response','Patient is not updated ')
    //     this.router.navigate(['viewcovcenpatients'])
    // }
    //   })
    // }
  }

  getWardsByDepartmentId(dept : CovCenDepartment) {
    console.log()
   // alert('department got \n Doctor is '+ JSON.stringify(dept.covcendoctor))
    this.covcenwardserv.getAllCovCenterWardsByDepartmentId(dept.covcendeptid).subscribe({
      next:(data) => {
          this.covcenwardlist = data
          this.covcenwardlist.forEach(dept => {
            if(typeof dept.covcendept.covcenter !='object') {
              // this.covcenterserv.getCovCenterById(dept.covcendept.covcenter).subscribe({
              //   next:(centerobj) => {
              //     dept.covcendept.covcenter = centerobj
              //   },
              // })
            }
          })

      },
    })
  }

  getBedsByWardId(ward : any) {
    this.covcenbedserv.getAllCovCenterBedByWardId(ward.covcenward_id).subscribe({
      next:(data)=> {          
        this.covcenbedlist = data
      },
    })
  }
}
