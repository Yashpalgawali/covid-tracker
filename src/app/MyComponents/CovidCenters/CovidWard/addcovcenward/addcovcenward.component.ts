import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CovcenwardService } from '../../../../Services/CovidCenWardService/covcenward.service';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';
import { CovCenWardType } from '../../../../../Models/CovCenWardType';
import { CovCenWards } from '../../../../../Models/CovCenWards';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';

@Component({
  selector: 'app-addcovcenward',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcovcenward.component.html',
  styleUrl: './addcovcenward.component.css'
})
export class AddcovcenwardComponent implements OnInit {

  covcenwardtypelist : CovCenWardType[] = []
  covcendeptlist : CovCenDepartment[] = []
  component_name : any
  ward_id !: number

  covncenwards : CovCenWards = new CovCenWards()

  constructor(private router : Router,private covcenwardserv : CovcenwardService,
              private covcenwardtypeserv : CovcenterwardtypeService,private covcendeptserv : CovidcenterdepartmentService,
              private route : ActivatedRoute) {}
  ngOnInit(): void {
    this.ward_id = this.route.snapshot.params['ward_id']
    
    if(this.ward_id!=null) {
      this.component_name = 'Update Covid Ward'
      this.covcenwardserv.getCovCenterWardById(this.ward_id).subscribe({
        next:(data) =>{
            this.covncenwards = data
        },
      })
    }
    else {
      this.component_name = 'Add Covid Ward'
    }
      this.covcenwardtypeserv.getAllCovCenterWardTypes().subscribe({
        next: (data) => {
          this.covcenwardtypelist = data
        },
      })

      this.covcendeptserv.getAllCovCenterDepartments().subscribe({
        next:(data)=> {
          this.covcendeptlist = data
        },
      })
  }

  onSubmit() {
    if(this.covncenwards.covcenward_id==null) {
          this.covcenwardserv.saveCovCenterWard(this.covncenwards).subscribe({
          next:(data) => {
              sessionStorage.setItem('response','Saved successfully')
              this.router.navigate(['viewcovcenwards'])
          },
          error:(err) => {
            sessionStorage.setItem('reserr','NOt Saved')
            this.router.navigate(['viewcovcenwards'])
          },
      })
    }
    else {
      this.covcenwardserv.updateCovCenterWard(this.covncenwards).subscribe({
        next:(data) => {
            sessionStorage.setItem('response','Ward is updated successfully')
            this.router.navigate(['viewcovcenwards'])
        },
        error:(err) => {
          sessionStorage.setItem('reserr','Ward is Not updated')
          this.router.navigate(['viewcovcenwards'])
        },
    })
    }
  }
}
