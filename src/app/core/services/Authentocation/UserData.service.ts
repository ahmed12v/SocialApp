import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root,  } from '../../interfaces/UserData';
import { baseUrl } from '../../../bases/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RestPassService {

  constructor(private _HttpClient:HttpClient) { }

  getUser():Observable<Root>
  {
    const token = localStorage.getItem('token')
    if(!token){
      throw new Error('Token not Found in LocalStorge')
    }
    const headers  = new HttpHeaders({
      token: token
    })
   // console.log('token :' , localStorage.getItem('token'));
    
     return this._HttpClient.get<Root>(`${baseUrl.base}users/profile-data`, {headers })
  }
}
