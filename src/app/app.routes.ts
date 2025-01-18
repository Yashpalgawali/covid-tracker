import { Routes } from '@angular/router';
import { AddcovidcenterComponent } from './MyComponents/CovidCenter/addcovidcenter/addcovidcenter.component';
import { ViewcovidcentersComponent } from './MyComponents/CovidCenter/viewcovidcenters/viewcovidcenters.component';
import { AddcovidcenterdepartmentComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/addcovidcenterdepartment/addcovidcenterdepartment.component';
import { ViewcovidcenterdepartmentsComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/viewcovidcenterdepartments/viewcovidcenterdepartments.component';
import { AddcovcenwardtypeComponent } from './MyComponents/CovidCenters/CovidWardType/addcovcenwardtype/addcovcenwardtype.component';
import { ViewcovcenwardtypesComponent } from './MyComponents/CovidCenters/CovidWardType/viewcovcenwardtypes/viewcovcenwardtypes.component';
import { AddcovcenwardComponent } from './MyComponents/CovidCenters/CovidWard/addcovcenward/addcovcenward.component';
import { ViewcovcenwardsComponent } from './MyComponents/CovidCenters/CovidWard/viewcovcenwards/viewcovcenwards.component';

export const routes: Routes = [
    { path : "addcovcenter" ,component :  AddcovidcenterComponent},
    { path : "edit/addcovcenter/:id" ,component :  AddcovidcenterComponent},
    { path : "covidcenter" , component : ViewcovidcentersComponent},

    { path : "addcovidcenterdepartment" , component : AddcovidcenterdepartmentComponent},
    { path : "covidcenterdepartment" , component : ViewcovidcenterdepartmentsComponent},
    { path : "edit/covidcenterdepartment/:dept_id" , component : AddcovidcenterdepartmentComponent},

    { path : "addcovcenwardtype" , component : AddcovcenwardtypeComponent},
    { path : "viewcovcenwardtypes" , component : ViewcovcenwardtypesComponent},
    { path : "edit/covcenwardtype/:wardtype_id" , component : AddcovcenwardtypeComponent},

    { path : "addcovcenward" , component : AddcovcenwardComponent },
    { path : "viewcovcenwards" , component : ViewcovcenwardsComponent},
    { path : "edit/covcenward/:ward_id" , component : AddcovcenwardComponent}
];
