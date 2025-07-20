import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { pattern } from '../../../bases/passwordPattern';
import { SignUpService } from '../../../core/services/Authentocation/sign-up.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private _SignUpService:SignUpService , private _Router:Router){}
  //#region Declarition
  Span=false;
  errorMassege!:any;
  //#endregion
  Register:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword:new FormControl(null,[Validators.required]),
    dateOfBirth:new FormControl(null,[Validators.required, ]),
    gender:new FormControl(null,[Validators.required,]),

  },this.checkrePassword)

  checkrePassword(match: AbstractControl) {
    if (match.get('password')?.value === match.get('rePassword')?.value) {
      return null;
    } else {
      match.get('rePassword')?.setErrors({ missmatch: true });
      return { missmatch: true };
    }
  }

registerNow(){
 
  if(this.Register.valid){
    this.Span=true
    this._SignUpService.Register(this.Register.value).subscribe({
     next:res=>{
      this.Span=false
      this._Router.navigate(['/login'])
      //console.log(res);
      this.Register.reset()
     },
     error:err=>{
      this.Span=false
      this.errorMassege=err.error.error
     // console.log(this.errorMassege);
     this.Register.reset()

     }
  })
  }else{
    console.log('this Form Not Valid');
    
  }
  
}

}
