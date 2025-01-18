import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovcenterwardtypeService } from '../../../../Services/CovidCenterServices/covcenterwardtype.service';
import { CovCenWardType } from '../../../../../Models/CovCenWardType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcovcenwardtype',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcovcenwardtype.component.html',
  styleUrl: './addcovcenwardtype.component.css'
})
export class AddcovcenwardtypeComponent implements OnInit {
  component_name !: string
  id : any
  covcenwardtype : CovCenWardType = new CovCenWardType()
  constructor(private router : Router,private covcenwardtypeserv: CovcenterwardtypeService,private route :ActivatedRoute) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['wardtype_id']
    if(this.id!= null) {
      this.component_name = 'Update Covid Center Ward Type'
      
      this.covcenwardtypeserv.getAllCovCenterWardTypeById(this.id).subscribe({
        next: (data) => {
            this.covcenwardtype = data
        },
      })
    }
    else {
      this.component_name = 'Add Covid Center Ward Type' 
    }
  }

  onSubmit()
  {
    if(this.covcenwardtype.cov_cen_ward_type_id!=null) {
      this.covcenwardtypeserv.updateCovCenterWardType(this.covcenwardtype).subscribe({
        next:(data) => {
            sessionStorage.setItem('response','Ward Type is updated Successfully')
            this.router.navigate(['viewcovcenwardtypes'])
        },
        error :(err) => {
          sessionStorage.setItem('reserr','Ward Type is not updated')
          this.router.navigate(['viewcovcenwardtypes'])
        },
      })
    }
    else {
      this.covcenwardtypeserv.saveCovCenterWardType(this.covcenwardtype).subscribe({
        next:(data) => {
            sessionStorage.setItem('response','Ward Type saved Successfully')
            this.router.navigate(['viewcovcenwardtypes'])
        },
        error :(err) => {
          sessionStorage.setItem('reserr','Ward Type is not saved')
          this.router.navigate(['viewcovcenwardtypes'])
        },
      })
    }
  }
}
