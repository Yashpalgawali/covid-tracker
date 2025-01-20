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

  covcenbed : CovCenBed = new CovCenBed()

  covcenbedlist : CovCenBed[] = []
  covcenbedlistfinal : CovCenBed[] = []
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
       
          if(typeof beds.covcenward != 'object') {
            this.covcenwardserv.getCovCenterWardById(beds.covcenward).subscribe({
              next:(wardobj) => {
                  beds.covcenward = wardobj
              },
            })
          }
          if(typeof beds.covcenward.covcendept !='object') {
              this.covcendeptserv.getCovCenterDepartmentByDepartmentId(beds.covcenward.covcendept).subscribe({
                next:(deptobj) => {
                    beds.covcenward.covcendept = deptobj
                },
              })
          }
        })
      }
    })
  }

  getCovCenterBedById(bed_id : number){
    this.router.navigate(['edit/covcenbed/',bed_id])
  }
}
