import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
data;found:boolean=false;
secondarydata;
y;z;
a=[];b;
jsonObj = [];
passwordupdatedata;
role=localStorage.getItem("role");
name;
add;age;amountstatus;dob;father;mother;pass;phone;scholarno;status;yoj;pod;cashflow;
passwordchangeform:FormGroup;
getCashFlowForm:FormGroup;

  constructor(private hero : HeroService,private router : Router,private fb: FormBuilder) { 
      this.hero.getDetails(localStorage.getItem("id")).subscribe(data=>{
      this.data=data;
      console.log(data);
      this.secondarydata=this.data.data[0].secondrydata;
      console.log(localStorage.getItem("id"));         
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
    
    
    });

    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  update(data){
    if(this.passwordchangeform.invalid){
      return;
    }
    this.hero.updatePassword(this.passwordchangeform.value.id,this.passwordchangeform.value.oldpassword,this.passwordchangeform.value.newpassword,this.role).subscribe(data=>{
      this.passwordupdatedata=data;
      console.log(data);
      this.passwordchangeform.reset();
      alert("New Password Set");
    })
    
  }
  ngOnInit(): void {
    this.passwordchangeform = this.fb.group({
      id : ['', Validators.required],
      oldpassword: ['', Validators.required],
      newpassword:['', Validators.minLength(6)]
    });
    this.getCashFlowForm = this.fb.group({
      clas:['',Validators.required]
    })
  }
  getcashFlow(data){
    this.found=false;
    
    if(!this.cashflow[data]){this.found=true;this.jsonObj = [];} 
    else
    this.jsonObj = [];
    this.b = Object.keys(this.cashflow[data]);
      
        for(var i=0;i<this.b.length;i++){
          var item = {}
         
          item["date"] = this.cashflow[data][this.b[i]].date
          item["recieptno"]= this.cashflow[data][this.b[i]].recieptno
          item["amount"]= this.cashflow[data][this.b[i]].amount
          this.jsonObj.push(item);
        
         
       }
     
  }
}
