import { Routes } from '@angular/router';
import { AddcovidcenterComponent } from './MyComponents/CovidCenter/addcovidcenter/addcovidcenter.component';
import { ViewcovidcentersComponent } from './MyComponents/CovidCenter/viewcovidcenters/viewcovidcenters.component';
import { AddcovidcenterdepartmentComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/addcovidcenterdepartment/addcovidcenterdepartment.component';
import { ViewcovidcenterdepartmentsComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/viewcovidcenterdepartments/viewcovidcenterdepartments.component';

export const routes: Routes = [
    { path : "addcovcenter" ,component :  AddcovidcenterComponent},
    { path : "edit/addcovcenter/:id" ,component :  AddcovidcenterComponent},
    { path : "covidcenter" , component : ViewcovidcentersComponent},

    { path : "addcovidcenterdepartment" , component : AddcovidcenterdepartmentComponent},
    { path : "covidcenterdepartment" , component : ViewcovidcenterdepartmentsComponent},
    { path : "edit/covidcenterdepartment/:id" , component : AddcovidcenterdepartmentComponent}
];
