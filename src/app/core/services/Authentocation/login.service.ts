import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../../../bases/baseUrl';
import { Login } from '../../interfaces/athu/signup';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   

  constructor(private _HttpClient:HttpClient , @Inject(PLATFORM_ID) private platformId: Object) { 
    this.loadUserFromToken()
  }


  Login(loginForm:Login):Observable<any>
  {
    return this._HttpClient.post(`${baseUrl.base}users/signin`,loginForm)
  }

  UserDataAfterDecoded : WritableSignal<JwtPayload | null>=signal(null);

  decodToken() {
    if(isPlatformBrowser(this.platformId)){
    const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    this.UserDataAfterDecoded.set(decoded);
  }
    }
  
}

loadUserFromToken() {
  if(isPlatformBrowser(this.platformId)){
    const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    this.UserDataAfterDecoded.set(decoded);
  }
  }
  
}
}
