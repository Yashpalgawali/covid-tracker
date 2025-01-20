import { Component, OnInit } from '@angular/core';
import { CovidcenterbedService } from '../../../../Services/CovidCenBedService/covidcenterbed.service';
import { Router, RouterLink } from '@angular/router';
import { CovCenBed } from '../../../../../Models/CovCenBed';
import { CommonModule } from '@angular/common';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovcenwardService } from '../../../../Services/CovidCenWardService/covcenward.service';

@Component({
  selector: 'app-viewcovcenbeds',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './viewcovcenbeds.component.html',
  styleUrl: './viewcovcenbeds.component.css'
})
export class ViewcovcenbedsComponent implements OnInit {

  covcenbedlist : CovCenBed[] = []
  covcendept_id !: number
  covcenward_id !: number
  response : any
  reserr : any
  constructor(private covcenbedserv : CovidcenterbedService,private router : Router,
              private covcendeptserv : CovidcenterdepartmentService,private covcenwardserv : CovcenwardService) {}

  ngOnInit(): void {
    this.covcenbedserv.getAllCovCenterBeds().subscribe({
      next:(data) =>{
        this.covcenbedlist = data
        this.covcenbedlist.forEach(beds => {
          console.log(JSON.stringify(beds))
          if(typeof beds.covcenward != 'object'){
            this.covcenwardserv.getCovCenterWardById(beds.covcenward).subscribe({
              next:(wardobj) => {
                  beds.covcenward = wardobj
                  alert(JSON.stringify(wardobj))
              },
            })
          }
        })
      }
    })
  }

  getCovCenterBedById(bed_id : number){

  }
}
