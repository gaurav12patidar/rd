import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent implements OnInit {
data;outputArray=[];
secondarydata;
y;z;
passwordupdatedata;
role=localStorage.getItem("role");
name;found:boolean=false;
add;age;amountstatus;dob;father;mother;pass;phone;scholarno;status;yoj;pod;cashflow;
passwordchangeform:FormGroup;
cashflowForm:FormGroup;

  constructor(private hero : HeroService,private router : Router,private fb: FormBuilder) { 
    this.hero.getDetails(localStorage.getItem("id")).subscribe(data=>{
      this.data=data;
      
      this.secondarydata=this.data.data[0].secondrydata;     
     this.y = Object.values(this.secondarydata); 
     this.name=this.data.data[0].username;
     this.add=this.data.data[0].address;
     this.age=this.data.data[0].age;
     this.amountstatus=this.data.data[0].amountstatus;
     this.dob=this.data.data[0].dob;
     this.father=this.data.data[0].fathername;
     this.mother=this.data.data[0].mothername;
     this.pass=this.data.data[0].password;
     this.phone=this.data.data[0].phoneno;
     this.scholarno=this.data.data[0].scholarno;
     this.yoj=this.data.data[0].yearofjoining;
     this.status=this.data.data[0].status;
     this.pod=this.data.data[0].previousorgdoc;
    this.cashflow = this.data.data[0].cashflow;
    
    
    })
     
  }

  ngOnInit(): void {
    this.passwordchangeform = this.fb.group({
      id : ['', Validators.required],
      oldpassword: ['', Validators.required],
      newpassword:['', Validators.minLength(6)]
    });
    this.cashflowForm = this.fb.group({
      month: ['',Validators.required],
      year : ['',Validators.required]
    })
  }
  update(data){
    if(this.passwordchangeform.invalid){
      return;
    }
    this.hero.updatePassword(this.passwordchangeform.value.id,this.passwordchangeform.value.oldpassword,this.passwordchangeform.value.newpassword,this.role).subscribe(data=>{
      this.passwordupdatedata=data;
      this.passwordchangeform.reset();
      alert("New Password Set");
    })
    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  navigateToTeacherGetStudentData(){
    this.router.navigate(['teachergetstudentdata']);
  }
  getcashFlow(data){
    this.found=false;
    var str=this.cashflowForm.value.month+'-'+this.cashflowForm.value.year;
    if(!this.cashflow[str]){this.found=true;this.z=null;}
    else this.z= Array.of(this.cashflow[str]);
    

 
}  

  
}
