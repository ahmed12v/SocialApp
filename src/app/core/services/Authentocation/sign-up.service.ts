import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../../interfaces/athu/signup';
import { baseUrl } from '../../../bases/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _HttpClient:HttpClient) { }

  Register(registerForm : Signup):Observable<any>
  {
   return this._HttpClient.post(`${baseUrl.base}users/signup`, registerForm)
  }
}
