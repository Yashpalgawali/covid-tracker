import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CovidcenterbedService } from '../../../../Services/CovidCenBedService/covidcenterbed.service';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';
import { CovcenwardService } from '../../../../Services/CovidCenWardService/covcenward.service';
import { CommonModule } from '@angular/common';
import { CovCenBed } from '../../../../../Models/CovCenBed';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';
import { CovCenWards } from '../../../../../Models/CovCenWards';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';

@Component({
  selector: 'app-addcovcenbed',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './addcovcenbed.component.html',
  styleUrl: './addcovcenbed.component.css'
})
export class AddcovcenbedComponent implements OnInit {
 
  covcenbed : CovCenBed = new CovCenBed()

  covcendept_id !:  number
  covcenward_id !:  number
  component_name !: string

  covcendeptlist : CovCenDepartment [] = []
  covcenwardlist : CovCenWards[] = []
  bed_id : any

  constructor(private router : Router,private covcenbedserv : CovidcenterbedService,private route : ActivatedRoute,
              private covcendeptserv : CovidcenterdepartmentService,private covcenwardtypeserv : CovcenterwardtypeService,
              private covcenwardserv : CovcenwardService) { }
  ngOnInit(): void {
      
   this.bed_id = this.route.snapshot.params['bed_id']
    if(this.bed_id != null) {
      this.component_name = 'Update Covid Center ward'
    }
    else {
        this.component_name = 'Add Covid Center ward'
        this.covcendeptserv.getAllCovCenterDepartments().subscribe({
          next:(data) =>{
            this.covcendeptlist = data
          },
        })
    }
  }
  onSubmit() {
    console.log(this.covcenbed)
    //alert(JSON.stringify(this.covcenbed.covcenward))
    
    if(this.covcenbed.covcenbed_id == null){
      this.covcenbedserv.saveCovCenterBed(this.covcenbed).subscribe({
        next:(data) =>{
            sessionStorage.setItem('response','Bed '+this.covcenbed.covcenbed_num+' is saved successfully')
            this.router.navigate(['/viewcovcenbeds'])
        },
        error:(err)=> {
          sessionStorage.setItem('reserr','Bed '+this.covcenbed.covcenbed_num+' is not saved')
          this.router.navigate(['/viewcovcenbeds'])
        },
      })
    }
    // else{
    //   this.covcenbedserv.updateCovCenterBed(this.covcenbed).subscribe({
    //     next:(data) => {
    //         this.covcenbed = data
    //         sessionStorage.setItem('response','Bed '+this.covcenbed.covcenbed_num+' is updated successfully')
    //         this.router.navigate(['/viewcovcenbeds'])
    //     },
    //     error:(err)=> {
    //       sessionStorage.setItem('reserr','Bed '+this.covcenbed.covcenbed_num+' is not updated')
    //       this.router.navigate(['/viewcovcenbeds'])
    //     },
    //   })
    // }
  }

  getWardsByDeptId(event : any  ) {
    
    this.covcenwardserv.getAllCovCenterWardsByDepartmentId(event.covcendeptid).subscribe({
      next:(data) => {
        this.covcenwardlist =data
        
        this.covcenwardlist.forEach(wards => {
          alert(wards.covcenwardtype)
            if( typeof wards.covcenwardtype === 'object' ) {
              //  alert(wards.covcenwardtype)
              //  wards.covcenwardtype = wards.covcenwardtype.cov_cen_ward_type_id
              //  this.covcenwardtypeserv.getAllCovCenterWardTypeById(wards.covcenwardtype).subscribe({
              //   next:(typeobj)=> {
              //       wards.covcenwardtype = typeobj
              //   },
              // })
            }
          })
      },
    })
    
  }
}
