import { Component, OnInit } from '@angular/core';
import { CovidcenterService } from '../../../Services/covidcenter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenter } from '../../../../Models/CovCenter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcovidcenters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcovidcenters.component.html',
  styleUrl: './viewcovidcenters.component.css'
})
export class ViewcovidcentersComponent implements OnInit{

  covcenlist : CovCenter[] = []
  response : any
  reserr : any

  constructor(private covcenserv : CovidcenterService,private router : Router,private route : ActivatedRoute){ }
  
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

      this.covcenserv.getAllCovCenters().subscribe({
        next : (data) => {
            this.covcenlist = data
        },
      })
  }

  getCovCenterById(covcenid : number) {
    this.router.navigate(['edit/addcovcenter/',covcenid])
  }
}
