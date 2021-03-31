import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HeadmasterComponent } from './headmaster/headmaster.component';
import { LoginComponent } from './login/login.component';
import { OperatorComponent } from './operator/operator.component';
import { SearchstudentdataComponent } from './searchstudentdata/searchstudentdata.component';
import { StudentComponent } from './student/student.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'student',
    component: StudentComponent
  },
  {
    path:'teacher',
    component: TeacherdetailsComponent
  },
  {
    path:'teachergetstudentdata',
    component: SearchstudentdataComponent
  },
  {
    path:'operator',
    component: OperatorComponent
  },
  {
    path:'auth',
    component: AuthComponent
  },
  {
    path:'headmaster',
    component: HeadmasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
