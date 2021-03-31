import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient) {}
  login(id,pass){
      return this.http.post('https://rdschool-server.herokuapp.com/login',{scholarno:id,password:pass})
   }
  getDetails(id){
    return this.http.post('https://rdschool-server.herokuapp.com/viewpersonalinfo',{scholarno:id})
  } 
  getDetailsByTeacher(id,roletocheck){
    return this.http.post('https://rdschool-server.herokuapp.com/viewpersonalinfo',{scholarno:id,roletocheck:roletocheck})
  }
  updatePassword(id,oldpassword,newpassword,role){
    return this.http.post('https://rdschool-server.herokuapp.com/passwordupdate',{scholarno:id,oldpassword:oldpassword,newpassword:newpassword,role:role})
  }
  createUserPrimary(roletocheck,username,status,password,fathername,mothername,yearofjoining,scholarno,dob,address,phoneno,role,amountstatus,age){
    return this.http.post('https://rdschool-server.herokuapp.com/createuserprimary',{roletocheck:roletocheck,username:username,status:status,password:password,fathername:fathername,mothername:mothername,yearofjoining:yearofjoining,scholarno:scholarno,dob:dob,address:address,phoneno:phoneno,role:role,amountstatus:amountstatus,age:age})
  } 
  updatePrimary(roletocheck,username,status,password,fathername,mothername,yearofjoining,scholarno,dob,address,phoneno,role,amountstatus,age,userid){
    return this.http.post('https://rdschool-server.herokuapp.com/updateprimary',{roletocheck:roletocheck,username:username,status:status,password:password,fathername:fathername,mothername:mothername,yearofjoining:yearofjoining,scholarno:scholarno,dob:dob,address:address,phoneno:phoneno,role:role,amountstatus:amountstatus,age:age,userid:userid})
  } 
  createUserSecondary(scholarno,roletocheck,year,classs,percentage,rollno){
    return this.http.post('https://rdschool-server.herokuapp.com/createusersecondary',{scholarno:scholarno,roletocheck:roletocheck,year:year,class:classs,percentage:percentage,rollno:rollno})
  } 
  createUserSecondaryTeacher(scholarno,roletocheck,year,classes,adminofclass){
    return this.http.post('https://rdschool-server.herokuapp.com/createusersecondryforteacher',{scholarno:scholarno,roletocheck:roletocheck,year:year,classes:classes,adminofclass:adminofclass})
  }
  updateTeacherYear(scholarno,roletocheck,classes,adminofclass,year){
    return this.http.post('https://rdschool-server.herokuapp.com/updateteacheryeardetails',{scholarno:scholarno,roletocheck:roletocheck,classes:classes,adminofclass:adminofclass,year:year})
  }
  removeSecondaryStudentData(scholarno,roletocheck,classs){
    return this.http.post('https://rdschool-server.herokuapp.com/removesecondrydataofstudent',{scholarno:scholarno,class:classs,roletocheck:roletocheck})
  }
  removeSecondaryTeacherData(scholarno,roletocheck,year){
    return this.http.post('https://rdschool-server.herokuapp.com/removesecondrydataofteacher',{scholarno:scholarno,roletocheck:roletocheck,year:year})
  }
  updateStudentYear(roletocheck,year,classs,percentage,rollno,scholarno){
    return this.http.post('https://rdschool-server.herokuapp.com/updateuseryeardetails',{scholarno:scholarno,roletocheck:roletocheck,class:classs,percentage:percentage,year:year,rollno:rollno})
  }
  createStudentCashflow(scholarno,roletocheck,classs,installment,recieptno,datee,amount){
    return this.http.post('https://rdschool-server.herokuapp.com/createstudentcashflow',{scholarno:scholarno,roletocheck:roletocheck,class:classs,installment:installment,recieptno:recieptno,date:datee,amount:amount})
  }
  createStudentInstallment(roletocheck,classs,scholarno,installment,recieptno,amount,datee){
    return this.http.post('https://rdschool-server.herokuapp.com/createinstallment',{scholarno:scholarno,roletocheck:roletocheck,class:classs,installment:installment,recieptno:recieptno,date:datee,amount:amount})
  }
  removeStudentInstallment(scholarno,roletocheck,classs,installment){
    return this.http.post('https://rdschool-server.herokuapp.com/removeinstallment',{scholarno:scholarno,roletocheck:roletocheck,class:classs,installment:installment})
  }
  removeStudentYearCashflow(roletocheck,scholarno,classs){
    return this.http.post('https://rdschool-server.herokuapp.com/removeyearcashflow',{scholarno:scholarno,roletocheck:roletocheck,class:classs})
  }
  addReportCard(roletocheck,scholarno,classs,imgbuffer){
    return this.http.post('https://rdschool-server.herokuapp.com/addreportcardimage',{scholarno:scholarno,roletocheck:roletocheck,class:classs,imgbuffer:imgbuffer})

  }
  addPreviousorgDoc(roletocheck,scholarno,imgbuffer){
    return this.http.post('https://rdschool-server.herokuapp.com/addpreviousorgdoc',{scholarno:scholarno,roletocheck:roletocheck,imgbuffer:imgbuffer})

  }
  getStudentSpreadsheet(roletocheck,sheetname,classs,year,username,status,googlespreadsheeturl,reportcardurl,percentage,amountstatus,role,userid,father,yoj,dob,add,phone,mother,age,previousorgdoc,rollno){
    return this.http.post('https://rdschool-server.herokuapp.com/getstudentsspreadsheeturl',{sheetname:sheetname,roletocheck:roletocheck,class:classs,username:username,status:status,year:year,googlespreadsheeturl:googlespreadsheeturl,reportcardurl:reportcardurl,percentage:percentage,role:role,amountstatus:amountstatus,userid:userid,fathername:father,mothername:mother,age:age,phoneno:phone,dob:dob,previousorgdoc:previousorgdoc,yearofjoining:yoj,address:add,rollno:rollno})

  }
  getStudentfeesSpreadsheet(roletocheck,sheetname,classs,year,username,status,noofinstallments,scholarno,userid,father,yoj,dob,add,phone,mother,age,previousorgdoc,rollno,date,recieptno,amount){
    return this.http.post('https://rdschool-server.herokuapp.com/getstudentsfeesspreadsheeturl',{sheetname:sheetname,roletocheck:roletocheck,class:classs,username:username,status:status,year:year,noofinstallments:noofinstallments,scholarno:scholarno,userid:userid,fathername:father,mothername:mother,age:age,phoneno:phone,dob:dob,previousorgdoc:previousorgdoc,yearofjoining:yoj,address:add,rollno:rollno,date:date,recieptno:recieptno,amount:amount})

  }
  getTeacherSalarySpreadsheet(roletocheck,sheetname,year,username,status,googlespreadsheeturl,amountstatus,role,userid,father,yoj,dob,add,phone,mother,age,previousorgdoc,classes,adminofclass,scholarno,date,amount,month){
    return this.http.post('https://rdschool-server.herokuapp.com/getteacherssalaryspreadsheeturl',{sheetname:sheetname,roletocheck:roletocheck,username:username,status:status,year:year,googlespreadsheeturl:googlespreadsheeturl,role:role,amountstatus:amountstatus,userid:userid,fathername:father,mothername:mother,age:age,phoneno:phone,dob:dob,previousorgdoc:previousorgdoc,yearofjoining:yoj,address:add,classes:classes,adminofclass:adminofclass,scholarno:scholarno,date:date,amount:amount,month:month})

  }
  getTecaherSpreadsheet(roletocheck,sheetname,year,username,status,googlespreadsheeturl,amountstatus,role,userid,father,yoj,dob,add,phone,mother,age,previousorgdoc,classes,adminofclass,scholarno){
    return this.http.post('https://rdschool-server.herokuapp.com/getteachersspreadsheeturl',{sheetname:sheetname,roletocheck:roletocheck,username:username,status:status,year:year,googlespreadsheeturl:googlespreadsheeturl,role:role,amountstatus:amountstatus,userid:userid,fathername:father,mothername:mother,age:age,phoneno:phone,dob:dob,previousorgdoc:previousorgdoc,yearofjoining:yoj,address:add,classes:classes,adminofclass:adminofclass,scholarno:scholarno})

  }
  createTeacherCashflow(scholarno,roletocheck,month,year,datee,amount){
    return this.http.post('https://rdschool-server.herokuapp.com/createteachercashflow',{scholarno:scholarno,roletocheck:roletocheck,month:month,year:year,date:datee,amount:amount})
  }
  deleteTeacherCashflow(scholarno,roletocheck,month,year){
    return this.http.post('https://rdschool-server.herokuapp.com/deleteteachercashflow',{scholarno:scholarno,roletocheck:roletocheck,month:month,year:year})
  }
}
