import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  
  constructor(private fb: FormBuilder,private hero : HeroService, private router: Router) { }
  data;
  role;
  status;
  cred:boolean=false;
  ngOnInit(): void {
    this.loginform = this.fb.group({
      id : ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  submit(data){
    if(this.loginform.invalid){
      return;
    }
    this.hero.login(this.loginform.value.id,this.loginform.value.password).subscribe(data=>{
      this.data=data;
      this.status = this.data.status;
      if(this.status=="success"){
      this.role=this.data.data[0].role;
      console.log(this.role);
      console.log(data);
      localStorage.setItem("role",this.role);
      localStorage.setItem("id",this.loginform.value.id);
      if(this.role=="student"){
        this.router.navigate(['/student']);
      }
      else if(this.role=="master"){
        this.router.navigate(['/teacher']);
      }
      else if(this.role=="headmaster"){
        this.router.navigate(['/admin']);
      }
      else if(this.role=="operator"){
        this.router.navigate(['/opreator']);

      }
      }
      if(!this.role) {
        this.cred=true;
        this.loginform.reset;
      }
    });
  }
}
