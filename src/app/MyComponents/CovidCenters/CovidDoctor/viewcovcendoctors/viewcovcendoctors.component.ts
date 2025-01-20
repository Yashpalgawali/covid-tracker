import { Component, OnInit } from '@angular/core';
import { CovCenDoctor } from '../../../../../Models/CovCenDoctor';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CovidCenterDoctorService } from '../../../../Services/CovidDoctor/covid-center-doctor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcovcendoctors',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './viewcovcendoctors.component.html',
  styleUrl: './viewcovcendoctors.component.css'
})
export class ViewcovcendoctorsComponent implements OnInit{

  covcendoclist : CovCenDoctor[] = []
  response : any
  reserr : any

  constructor(private router : Router,private route : ActivatedRoute,private covcendocserv : CovidCenterDoctorService) {}
  ngOnInit(): void {
    this.covcendocserv.getAllCovCenDoctors().subscribe({
      next: (data) => {
          this.covcendoclist = data
      },
    })
  }

  getCovCenterDoctorById(docid : any){
    this.router.navigate(['edit/covcendoctor/',docid])
  }
}
