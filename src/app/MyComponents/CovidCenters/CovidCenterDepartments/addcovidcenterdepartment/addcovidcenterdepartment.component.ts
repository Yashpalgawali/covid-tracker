import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenDepartment } from '../../../../../Models/CovCenDepartment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CovidcenterService } from '../../../../Services/covidcenter.service';
import { CovCenter } from '../../../../../Models/CovCenter';
import { CovidcenterdepartmentService } from '../../../../Services/covidcenterdepartment.service';

@Component({
  selector: 'app-addcovidcenterdepartment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcovidcenterdepartment.component.html',
  styleUrl: './addcovidcenterdepartment.component.css'
})
export class AddcovidcenterdepartmentComponent implements OnInit{

  covcendepartment : CovCenDepartment = new CovCenDepartment()
  dept_id !: number
  component_name  !: string
  covcenlist : CovCenter[] = []
  constructor(private router : Router,private route : ActivatedRoute,
              private covcenserv : CovidcenterService,private covcendeptserv: CovidcenterdepartmentService) {}

  ngOnInit(): void {
      this.dept_id = this.route.snapshot.params['dept_id']
     
      if(this.dept_id!=null) {
        this.component_name = 'Update Covid Center Department'
        this.covcendeptserv.getCovCenterDepartmentByDepartmentId(this.dept_id).subscribe({
          next:(data)=> {
            this.covcendepartment = data
          },
        })
      }
      else {
        this.component_name = 'Add Covid Center Department'
      }

      this.covcenserv.getAllCovCenters().subscribe({
        next: (data) => {
          this.covcenlist = data
        },
      })
  }

  onSubmit() {
    alert(this.covcendepartment.covcendeptid )
    if(this.covcendepartment.covcendeptid == null)
      {
        this.covcendeptserv.saveCovCenterDepartment(this.covcendepartment).subscribe({
        next:(data) => {
            sessionStorage.setItem('response','Department is saved successfully')
            this.router.navigate(['/covidcenterdepartment'])
        },
        error : (error) => {
          sessionStorage.setItem('reserr','Department is not saved ')
          this.router.navigate(['/covidcenterdepartment'])
        },
      })
    }
    if(this.covcendepartment.covcendeptid != null)
      {
        this.covcendeptserv.updateCovCenterDepartment(this.covcendepartment).subscribe({
        next:(data) => {
            sessionStorage.setItem('response','Department is updated successfully')
            this.router.navigate(['/covidcenterdepartment'])
        },
        error : (error) => {
          sessionStorage.setItem('reserr','Department is not updated ')
          this.router.navigate(['/covidcenterdepartment'])
        },
      })
    }

  }
}
