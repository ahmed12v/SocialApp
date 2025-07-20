import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../core/services/Authentocation/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //#region decalration
  span=false
  errorMassage!:any
  //#endregion
  Login : FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required,
                             Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]), 
  })

constructor(private _LoginService:LoginService , private _Router:Router){}

  LoginNow(){
    if(this.Login.valid){
      this.span=true;
      this._LoginService.Login(this.Login.value).subscribe({
        next:res=>{
          this.span=false
          localStorage.setItem('token', res.token);
          this._LoginService.decodToken()
          //console.log(res);
          this._Router.navigate(['/home'])
          this.Login.reset()
        },
        error:err=>{
          this.span=false
          //console.log(err);
          this.errorMassage=err.error.error
          this.Login.reset()
        }
      })
    }
  }

}
