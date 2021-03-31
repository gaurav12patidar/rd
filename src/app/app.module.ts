import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { SearchstudentdataComponent } from './searchstudentdata/searchstudentdata.component';
import { OperatorComponent } from './operator/operator.component';
import { AuthComponent } from './auth/auth.component';
import { HeadmasterComponent } from './headmaster/headmaster.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherdetailsComponent,
    SearchstudentdataComponent,
    OperatorComponent,
    AuthComponent,
    HeadmasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
