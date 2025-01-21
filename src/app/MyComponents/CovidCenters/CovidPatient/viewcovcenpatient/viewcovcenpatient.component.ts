import { Component, OnInit } from '@angular/core';
import { CovidcenpatientService } from '../../../../Services/CovidPatient/covidcenpatient.service';
import { Router, RouterLink } from '@angular/router';
import { CovCenPatient } from '../../../../../Models/CovCenPatient';
import { CovidCenterDoctorService } from '../../../../Services/CovidDoctor/covid-center-doctor.service';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovidcenterbedService } from '../../../../Services/CovidCenBedService/covidcenterbed.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcovcenpatient',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcenpatient.component.html',
  styleUrl: './viewcovcenpatient.component.css'
})
export class ViewcovcenpatientComponent implements OnInit{

  covcenpatientlist : CovCenPatient[] =[]
  response : any
  reserr : any

  constructor(private covcenpaientserv : CovidcenpatientService,private covcendocserv : CovidCenterDoctorService,
              private router : Router,private covcenbedserv : CovidcenterbedService){ }
              
  ngOnInit(): void {
    this.covcenpaientserv.getAllCovCenPatients().subscribe({
      next:(data) =>{
          this.covcenpatientlist = data
          this.covcenpatientlist.forEach(patients => {
            if(typeof patients.covcendoctor != 'object'){
              this.covcendocserv.getAllCovCenDoctorById(patients.covcendoctor).subscribe({
                next : (docobj) => {
                  patients.covcendoctor = docobj
                }
              })
            }
            if(typeof patients.covcenbed != 'object') {
              this.covcenbedserv.getAllCovCenterBedById(patients.covcenbed).subscribe({
                next:(bedobj) =>{
                    patients.covcenbed = bedobj
                },
              })
            }
          })
      },
    })
  }

  getCovCenPatientById(patient_id : number) {
    this.router.navigate(['edit/covenpatient/',patient_id])
  }
}
