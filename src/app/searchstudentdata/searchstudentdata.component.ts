import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchstudentdata',
  templateUrl: './searchstudentdata.component.html',
  styleUrls: ['./searchstudentdata.component.css']
})
export class SearchstudentdataComponent implements OnInit {
  getdataform:FormGroup;found:boolean=false;foundteacher:boolean=false;
  data;jsonObj = [];
  datastatus;b;rolechecker;
secondarydata;
y;z;
passwordupdatedata;
role=localStorage.getItem("role");
name;
add;age;amountstatus;dob;father;mother;pass;phone;scholarno;status;yoj;pod;cashflow;
cred:boolean=false;
active:boolean=false;
student:boolean=false;
teacher:boolean=false;
getCashFlowForm:FormGroup;
cashflowForm:FormGroup;
  constructor(private hero : HeroService,private router : Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getdataform = this.fb.group({
      id : ['', Validators.required]
    });
    this.getCashFlowForm = this.fb.group({
      clas:['',Validators.required]
    })
    this.cashflowForm = this.fb.group({
      month: ['',Validators.required],
      year : ['',Validators.required]
    })
  }
  search(data){

    this.hero.getDetailsByTeacher(this.getdataform.value.id,this.role).subscribe(data=>{
      this.data=data;
      this.datastatus = this.data.status;
      if(this.datastatus=="error"){ this.cred=true}else this.cred=false;
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
    this.active=true;
    this.cashflow = this.data.data[0].cashflow;
    this.rolechecker = this.data.data[0].role;
    if(this.rolechecker=='student'){this.student=true;this.teacher=false}
    if(this.rolechecker=='master'|| this.rolechecker=='operator'){this.teacher=true;this.student=false}
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
  getcashFlowifTeacher(data){
    this.foundteacher=false;
    
    var str=this.cashflowForm.value.month+'-'+this.cashflowForm.value.year;
    if(!this.cashflow[str]){this.found=true;this.z=null;}
    else this.z= Array.of(this.cashflow[str]);
    

 
}  

}
