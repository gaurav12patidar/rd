import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  createUserPrimaryform:FormGroup;
  updatePrimaryform:FormGroup;
  updatePrimaryid:FormGroup;
  createUserSecondaryform:FormGroup;
  createUserSecondaryTeacherform:FormGroup;
  updateTeacherYearform:FormGroup;
  removeSecondaryStudentDataform:FormGroup;
  removeSecondaryTeacherDataform:FormGroup;
  updateSecondaryStudentDataform:FormGroup;
  createStudentCashflowform:FormGroup;
  createStudentInstallmentform:FormGroup;
  removeStudentInstallmentform:FormGroup;
  removeStudentYearcashflowform:FormGroup;
  addReportCardform:FormGroup;
  addPreviousOrgform:FormGroup;
  studentspreadsheetform:FormGroup;
  feesspreadsheet:FormGroup;


  data;outputArray=[];
  secondarydata;
  y;z;
  passwordupdatedata;
  role=localStorage.getItem("role");
  name;found:boolean=false;
  add;age;amountstatus;dob;father;mother;pass;phone;scholarno;status;yoj;pod;cashflow;userid;role2;
  download;justview;downloadfees;justviewfees;
fromOne:boolean=true;
fromTwo:boolean=false;
fromThree:boolean=false;
fromFour:boolean=false;
fromFive:boolean=false;
fromSix:boolean=false;
fromSeven:boolean=false;
fromEight:boolean=false;
fromNine:boolean=false;
fromTen:boolean=false;
fromEleven:boolean=false;
fromTwelve:boolean=false;
fromThirteen:boolean=false;
fromFourteen:boolean=false;
fromSixteen:boolean=false;
fromUpdate:boolean=false;
fromupdateSecStu:boolean=false;
fromFifteen:boolean=false;
viewsheet:boolean=false;
viewsheetfees:boolean=false;


  roletocheck = localStorage.getItem("role");
  

  constructor(private fb: FormBuilder,private hero : HeroService, private router: Router) { }

  ngOnInit(): void {
    this.createUserPrimaryform = this.fb.group({
      id : ['', Validators.required],
      password: ['', Validators.required],
      name:['', Validators.required],
      father:['', Validators.required],
      mother:['', Validators.required],
      add:['', Validators.required],
      phone:['', Validators.minLength(10)],
      dob:['', Validators.required],
      yoj:['', Validators.required],
      status:['', Validators.required],
      role:['', Validators.required],
      amountstatus:['', Validators.required],
      age:['',Validators.required]
      });

      this.updatePrimaryform = this.fb.group({
        id : [this.scholarno,Validators.required],
        password: [this.pass],
        name:[this.name],
        father:[this.father],
        mother:[this.mother],
        add:[this.add],
        phone:[this.phone],
        dob:[this.dob],
        yoj:[this.yoj],
        status:[this.status],
        role:[this.role],
        amountstatus:[this.amountstatus],
        age:[this.age],
        userid:[this.userid,Validators.required]

        });
     
        this.updatePrimaryid = this.fb.group({
          id : ['',Validators.required]
        });

        this.createUserSecondaryform = this.fb.group({
          id : ['', Validators.required],
          year:['', Validators.required],
          class:['', Validators.required],
          percentage:['', Validators.required],
          rollno:['', Validators.required]
          });

          this.updateSecondaryStudentDataform = this.fb.group({
            id : [''],
            year:[''],
            class:[''],
            percentage:[''],
            rollno:['']
            });

          this.removeSecondaryStudentDataform = this.fb.group({
            id : ['', Validators.required],
            class:['', Validators.required],
            });    


            this.createUserSecondaryTeacherform = this.fb.group({
              id : ['', Validators.required],
              year:['', Validators.required],
              classes:['', Validators.required],
              admin:['', Validators.required]              
              });
          
              
            this.updateTeacherYearform = this.fb.group({
              id : ['', Validators.required],
              year:['', Validators.required],
              classes:['null'],
              admin:['null']              
              });

            this.removeSecondaryTeacherDataform = this.fb.group({
                id : ['', Validators.required],
                year:['', Validators.required],
                }); 

        this.createStudentCashflowform = this.fb.group({
                  id : ['', Validators.required],
                  class:['', Validators.required],
                  installment:['', Validators.required],
                  recieptno:['', Validators.required],
                  date:['', Validators.required],
                  amount:['', Validators.required],
                  });    
         
          this.createStudentInstallmentform = this.fb.group({
                    id : ['', Validators.required],
                    class:['', Validators.required],
                    installment:['', Validators.required],
                    recieptno:['', Validators.required],
                    date:['', Validators.required],
                    amount:['', Validators.required],
                    });       
                    
          this.removeStudentInstallmentform = this.fb.group({
            id : ['', Validators.required],
            class:['', Validators.required],
            installment:['', Validators.required]            
            });     
          
           this.removeStudentYearcashflowform = this.fb.group({
                      id : ['', Validators.required],
                      class:['', Validators.required]
             });     
             this.addReportCardform = this.fb.group({
              id : ['', Validators.required],
              class:['', Validators.required]
     });                         
     this.addPreviousOrgform = this.fb.group({
      id : ['', Validators.required],
      class:['', Validators.required]
      });
      this.studentspreadsheetform = this.fb.group({
        sheetname:['',Validators.required],
        googlespreadsheeturl:[''],
        class:['',Validators.required],
        year:['',Validators.required],
        username:[''],
        status:[''],
        amountstatus:[''],
        percentage:[''],
        reportcardurl:[''],
        role:[''],
        userid:[''],
        father:[''],
        mother:[''],
        yoj:[''],
        dob:[''],
        add:[''],
        age:[''],
        phone:[''],
        previousorgdoc:[''],
        rollno:['']
      });
      this.feesspreadsheet = this.fb.group({
        sheetname:['',Validators.required],
        class:['',Validators.required],
        year:['',Validators.required],
        username:[''],
        status:[''],
        noofinstallments:[''],
        scholarno:[''],
        amountstatus:[''],
        percentage:[''],
        reportcardurl:[''],
        role:[''],
        userid:[''],
        father:[''],
        mother:[''],
        yoj:[''],
        dob:[''],
        add:[''],
        age:[''],
        phone:[''],
        previousorgdoc:[''],
        rollno:[''],
        date:[''],
        recieptno:[''],
        amount:['']
      })                         
            
  }
  createNewStudent(data){
    this.hero.createUserPrimary(this.roletocheck,this.createUserPrimaryform.value.name,this.createUserPrimaryform.value.status,this.createUserPrimaryform.value.password,this.createUserPrimaryform.value.father,this.createUserPrimaryform.value.mother,this.createUserPrimaryform.value.yoj,this.createUserPrimaryform.value.id,this.createUserPrimaryform.value.dob,this.createUserPrimaryform.value.add,this.createUserPrimaryform.value.phone,this.createUserPrimaryform.value.role,this.createUserPrimaryform.value.amountstatus,this.createUserPrimaryform.value.age).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  updateStudent(data){
    if(this.updatePrimaryform.value.id==null){this.updatePrimaryform.value.id=this.scholarno}
     if(this.updatePrimaryform.value.add==null){this.updatePrimaryform.value.add=this.add}
     if(this.updatePrimaryform.value.userid==null){this.updatePrimaryform.value.userid=this.userid}
    if(this.updatePrimaryform.value.name==null){this.updatePrimaryform.value.name=this.name}
     if(this.updatePrimaryform.value.father==null){this.updatePrimaryform.value.father=this.father}
    if(this.updatePrimaryform.value.mother==null){this.updatePrimaryform.value.mother=this.mother}
     if(this.updatePrimaryform.value.password==null){this.updatePrimaryform.value.password=this.pass}
     if(this.updatePrimaryform.value.age==null){this.updatePrimaryform.value.age=this.age}
     if(this.updatePrimaryform.value.phone==null){this.updatePrimaryform.value.phone=this.phone}
     if(this.updatePrimaryform.value.yoj==null){this.updatePrimaryform.value.yoj=this.yoj}
     if(this.updatePrimaryform.value.dob==null){this.updatePrimaryform.value.dob=this.dob}
     if(this.updatePrimaryform.value.role==null){this.updatePrimaryform.value.role=this.role2}
     if(this.updatePrimaryform.value.status==null){this.updatePrimaryform.value.status=this.status}
     if(this.updatePrimaryform.value.amountstatus==null){this.updatePrimaryform.value.amountstatus=this.amountstatus}
    
    console.log(this.updatePrimaryform.value.id,(this.updatePrimaryform.value));
    this.hero.updatePrimary(this.roletocheck,this.updatePrimaryform.value.name,this.updatePrimaryform.value.status,this.updatePrimaryform.value.password,this.updatePrimaryform.value.father,this.updatePrimaryform.value.mother,this.updatePrimaryform.value.yoj,this.updatePrimaryform.value.id,this.updatePrimaryform.value.dob,this.updatePrimaryform.value.add,this.updatePrimaryform.value.phone,this.updatePrimaryform.value.role,this.updatePrimaryform.value.amountstatus,this.updatePrimaryform.value.age,this.updatePrimaryform.value.userid).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  getdatatoupdate(){
    this.fromUpdate = true;
    this.hero.getDetails(this.updatePrimaryid.value.id).subscribe(data=>{
      this.data=data;
      console.log(data);
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
    this.userid =this.data.data[0].userid;
    this.role2 =this.data.data[0].role2;
    })
  }
  createUserSecondary(data){
    this.hero.createUserSecondary(this.createUserSecondaryform.value.id,this.roletocheck,this.createUserSecondaryform.value.year,this.createUserSecondaryform.value.class,this.createUserSecondaryform.value.percentage,this.createUserSecondaryform.value.rollno).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  getdatatoupdateSecStu(){
    this.fromupdateSecStu = true;
    this.hero.getDetails(this.updatePrimaryid.value.id).subscribe(data=>{
      this.data=data;
      console.log(data);
      this.secondarydata=this.data.data[0].secondrydata;     
     this.y = Object.values(this.secondarydata); 
     
    })
  }
  updateUserSecondary(data){
    this.hero.updateStudentYear(this.roletocheck,this.updateSecondaryStudentDataform.value.year,this.updateSecondaryStudentDataform.value.class,this.updateSecondaryStudentDataform.value.percentage,this.updateSecondaryStudentDataform.value.rollno,this.updateSecondaryStudentDataform.value.id,).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  removeSecondaryDataStudent(data){
    this.hero.removeSecondaryStudentData(this.removeSecondaryStudentDataform.value.id,this.roletocheck,this.removeSecondaryStudentDataform.value.class).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  createTeacherSecondary(data){
    this.hero.createUserSecondaryTeacher(this.createUserSecondaryTeacherform.value.id,this.roletocheck,this.createUserSecondaryTeacherform.value.year,this.createUserSecondaryTeacherform.value.classes,this.createUserSecondaryTeacherform.value.admin).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  updateTeacherYear(data){
    //if(this.updateTeacherYearform.value.classes==null){this.updateTeacherYearform.value.classes="null"}
    this.hero.updateTeacherYear(this.updateTeacherYearform.value.id,this.roletocheck,this.updateTeacherYearform.value.classes,this.updateTeacherYearform.value.admin,this.updateTeacherYearform.value.year).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  removeTeacherYear(data){
    this.hero.removeSecondaryTeacherData(this.removeSecondaryTeacherDataform.value.id,this.roletocheck,this.removeSecondaryTeacherDataform.value.year).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  createStudentCashflow(data){
    this.hero.createStudentCashflow(this.createStudentCashflowform.value.id,this.roletocheck,this.createStudentCashflowform.value.class,this.createStudentCashflowform.value.installment,this.createStudentCashflowform.value.recieptno,this.createStudentCashflowform.value.date,this.createStudentCashflowform.value.amount).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  createStudentInstallment(data){
    this.hero.createStudentInstallment(this.roletocheck,this.createStudentInstallmentform.value.class,this.createStudentInstallmentform.value.id,this.createStudentInstallmentform.value.installment,this.createStudentInstallmentform.value.amount,this.createStudentInstallmentform.value.recieptno,this.createStudentInstallmentform.value.date).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  removeStudentInstallment(data){
    this.hero.removeStudentInstallment(this.removeStudentInstallmentform.value.id,this.roletocheck,this.removeStudentInstallmentform.value.class,this.removeStudentInstallmentform.value.installment).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  removeStudentCashflow(data){
    this.hero.removeStudentYearCashflow(this.roletocheck,this.removeStudentYearcashflowform.value.id,this.removeStudentYearcashflowform.value.class).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
    
  }
  getStudentSpreadsheet(data){
    console.log(this.studentspreadsheetform.value);

    this.hero.getStudentSpreadsheet(this.roletocheck,this.studentspreadsheetform.value.sheetname,this.studentspreadsheetform.value.class,this.studentspreadsheetform.value.year,this.studentspreadsheetform.value.username,this.studentspreadsheetform.value.status,this.studentspreadsheetform.value.googlespreadsheeturl,this.studentspreadsheetform.value.reportcardurl,this.studentspreadsheetform.value.percentage,this.studentspreadsheetform.value.amountstatus,this.studentspreadsheetform.value.role,this.studentspreadsheetform.value.userid,this.studentspreadsheetform.value.father,this.studentspreadsheetform.value.yoj,this.studentspreadsheetform.value.dob,this.studentspreadsheetform.value.add,this.studentspreadsheetform.value.phone,this.studentspreadsheetform.value.mother,this.studentspreadsheetform.value.age,this.studentspreadsheetform.value.previousorgdoc,this.studentspreadsheetform.value.rollno).subscribe(data=>{
      this.data=data;
      console.log(data);
      this.download=this.data.data.downloadspreadsheeturl;
      this.justview = this.data.data.viewspreadsheeturl;
      this.viewsheet=true;
    })
  }
  getStudentFeesSpreadsheet(data){
    console.log(this.feesspreadsheet.value);
      this.hero.getStudentfeesSpreadsheet(this.roletocheck,this.feesspreadsheet.value.sheetname,this.feesspreadsheet.value.class,this.feesspreadsheet.value.year,this.feesspreadsheet.value.username,this.feesspreadsheet.value.status,this.feesspreadsheet.value.noofinstallments,this.feesspreadsheet.value.scholarno,this.feesspreadsheet.value.userid,this.feesspreadsheet.value.father,this.feesspreadsheet.value.yoj,this.feesspreadsheet.value.dob,this.feesspreadsheet.value.add,this.feesspreadsheet.value.phone,this.feesspreadsheet.value.mother,this.feesspreadsheet.value.age,this.feesspreadsheet.value.previousorgdoc,this.feesspreadsheet.value.rollno,this.feesspreadsheet.value.date,this.feesspreadsheet.value.recieptno,this.feesspreadsheet.value.amount).subscribe(data=>{
        this.data=data;
        console.log(data);
        this.downloadfees=this.data.data.downloadspreadsheeturl;
      this.justviewfees = this.data.data.viewspreadsheeturl;
      this.viewsheetfees=true;
      })
    }
  selectedfile;
  imagebuffer;
  base64result;
  reportcardId;
  reportcardClass;
  previousdocId;
  
  fileSelected(event){
     // console.log(this.selectedfile);
    var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
       this.imagebuffer= event.target.result;
      // this.base64result = event.target.result.split('/')[1];
      }
     
  }
  addReportCardDetails(data){
    this.reportcardId = this.addReportCardform.value.id;
    this.reportcardClass = this.addReportCardform.value.class;
  }
  addPreviousOrgDocDetails(data){
    this.previousdocId = this.addPreviousOrgform.value.id;
  }
  onuploadDoc(){
      this.hero.addPreviousorgDoc('operator',this.previousdocId,this.imagebuffer).subscribe(data=>{
              this.data=data;
              console.log(data);        
            })
  }
  onupload(){
      this.hero.addReportCard(this.roletocheck,this.reportcardId,this.reportcardClass,this.imagebuffer).subscribe(data=>{
        console.log(this.addReportCardform.value.id,this.addReportCardform.value.class);
        this.data=data;
        console.log(data);        
      })
     
  }
  
  one(){
   this.fromOne=true;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
   this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
   this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
  }
  two(){
    this.fromOne=false;this.fromTwo=true;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  three(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=true;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  four(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=true;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  five(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=true;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  six(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=true;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  seven(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=true;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  eight(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=true;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  nine(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=true;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  ten(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=true;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  eleven(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=true;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  twelve(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=true;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  thirteen(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=true;this.fromFourteen=false;
   
  }
  fourteen(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=true;
   
  }
  fifteen(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=false;this.fromFifteen=true;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  sixteen(){
    this.fromOne=false;this.fromTwo=false;this.fromThree=false;this.fromUpdate=false;this.fromupdateSecStu=false;
    this.fromFour=false;this.fromFive=false;this.fromSix=false;this.fromSeven=false;this.fromSixteen=true;this.fromFifteen=false;
    this.fromEight=false;this.fromNine=false;this.fromTen=false;this.fromEleven=false;this.fromTwelve=false;this.fromThirteen=false;this.fromFourteen=false;
   
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  navigateToTeacherGetStudentData(){
    this.router.navigate(['teachergetstudentdata']);
  }
}
