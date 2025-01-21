import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CovCenter } from '../../../../Models/CovCenter';
import { CovidcenterService } from '../../../Services/covidcenter.service';

@Component({
  selector: 'app-addcovidcenter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcovidcenter.component.html',
  styleUrl: './addcovidcenter.component.css'
})
export class AddcovidcenterComponent implements OnInit{

  covcenter : CovCenter = new CovCenter()
  id :any 
  component_name !: string
  constructor(private router : Router,private covcenserv : CovidcenterService,private route : ActivatedRoute){ }
  ngOnInit(): void {
      
    this.id = this.route.snapshot.params['id']
    if(this.id!= null) {
      this.component_name = 'Update Covid Center'
      this.covcenserv.getCovCenterById(this.id).subscribe({
        next : (data) => {
            this.covcenter = data
        },
      })
    }
    else {
      this.component_name = 'Add Covid Center' 
    }
  }
  
  onSubmit() {

    if(this.covcenter.covcen_id!=null){
     
      this.covcenserv.updateCovCenter(this.covcenter).subscribe({
        next : (data) => {
          sessionStorage.setItem('response','Covid center is updated successfully')
          this.router.navigate(['/covidcenter'])
      },
      error:(err) =>{
        sessionStorage.setItem('reserr','Covid center is not updated')
        this.router.navigate(['/covidcenter'])
      }
      })
    }
    else
    { 
      this.covcenserv.saveCovCenter(this.covcenter).subscribe({
      next : (data) => {
          sessionStorage.setItem('response','Covid center is saved successfully')
          this.router.navigate(['/covidcenter'])
      },
      error:(err) =>{
        sessionStorage.setItem('reserr','Covid center is not saved')
        this.router.navigate(['/covidcenter'])
      }
    })
   }
  }

}
