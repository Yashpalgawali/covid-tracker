import { Routes } from '@angular/router';
import { AddcovidcenterComponent } from './MyComponents/CovidCenter/addcovidcenter/addcovidcenter.component';
import { ViewcovidcentersComponent } from './MyComponents/CovidCenter/viewcovidcenters/viewcovidcenters.component';
import { AddcovidcenterdepartmentComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/addcovidcenterdepartment/addcovidcenterdepartment.component';
import { ViewcovidcenterdepartmentsComponent } from './MyComponents/CovidCenters/CovidCenterDepartments/viewcovidcenterdepartments/viewcovidcenterdepartments.component';
import { AddcovcenwardtypeComponent } from './MyComponents/CovidCenters/CovidWardType/addcovcenwardtype/addcovcenwardtype.component';
import { ViewcovcenwardtypesComponent } from './MyComponents/CovidCenters/CovidWardType/viewcovcenwardtypes/viewcovcenwardtypes.component';
import { AddcovcenwardComponent } from './MyComponents/CovidCenters/CovidWard/addcovcenward/addcovcenward.component';
import { ViewcovcenwardsComponent } from './MyComponents/CovidCenters/CovidWard/viewcovcenwards/viewcovcenwards.component';
import { AddcovcenbedComponent } from './MyComponents/CovidCenters/CovidWardBeds/addcovcenbed/addcovcenbed.component';
import { ViewcovcenbedsComponent } from './MyComponents/CovidCenters/CovidWardBeds/viewcovcenbeds/viewcovcenbeds.component';
import { AddcovcendoctorComponent } from './MyComponents/CovidCenters/CovidDoctor/addcovcendoctor/addcovcendoctor.component';
import { ViewcovcendoctorsComponent } from './MyComponents/CovidCenters/CovidDoctor/viewcovcendoctors/viewcovcendoctors.component';
import { AddcovcenpatientComponent } from './MyComponents/CovidCenters/CovidPatient/addcovcenpatient/addcovcenpatient.component';
import { ViewcovcenpatientComponent } from './MyComponents/CovidCenters/CovidPatient/viewcovcenpatient/viewcovcenpatient.component';

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
    { path : "edit/covcenward/:ward_id" , component : AddcovcenwardComponent},

    { path : "addcovcenbed" , component : AddcovcenbedComponent },
    { path : "viewcovcenbeds" , component : ViewcovcenbedsComponent},
    { path : "edit/covcenbed/:bed_id" , component : AddcovcenbedComponent},

    { path : "addcovcendoctor" , component : AddcovcendoctorComponent },
    { path : "viewcovcendoctors" , component : ViewcovcendoctorsComponent},
    { path : "edit/covcendoctor/:doc_id" , component : AddcovcendoctorComponent},

    { path : "addcovcenpatient" , component : AddcovcenpatientComponent },
    { path : "viewcovcenpatients" , component : ViewcovcenpatientComponent},
    { path : "edit/covcenpatient/:patient_id" , component : AddcovcenpatientComponent}
];
