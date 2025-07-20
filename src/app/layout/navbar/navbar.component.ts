import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { LoginService } from '../../core/services/Authentocation/login.service';
import { RestPassService } from '../../core/services/Authentocation/UserData.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Root } from '../../core/interfaces/UserData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,  CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
  trigger('popupAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
      animate('200ms ease-out', 
        style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
    ]),
    transition(':leave', [
      animate('150ms ease-in', 
        style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }))
    ])
  ])
]
})
export class NavbarComponent implements OnInit{
  constructor(private _Route:Router , public _LoginService:LoginService , private _UserData:RestPassService){}
  
//#region declare
 login=false 
 showPopup=false
 
//#endregion
ngOnInit(): void {
  
    //this._LoginService.UserDataAfterDecoded() !== null
    if(this._LoginService.UserDataAfterDecoded() !== null){
      this.login=true
    
    }
    this.checkTokenAndLoadData();

    // تراقب التغيرات على token من أي مكان في التطبيق
    window.addEventListener('storage', (event) => {
      if (event.key === 'token') {
        this.checkTokenAndLoadData();
      }
    });
    
  }
  checkTokenAndLoadData() {
    const token = localStorage.getItem('token');
    if (token) {
      this.UserCome(); // التوكن موجود → جيب البيانات
    } else {
       // مفيش توكن → امسح البيانات
    }
  }

 

logout(){
  localStorage.removeItem('token')
  this._LoginService.UserDataAfterDecoded.set(null)
  this._Route.navigate(['login'])
}
 //#region TabToggle
  toggleMenu() {
    document.querySelector('.nav-links')?.classList.toggle('show');
    
  }
  closeNav(){
    document.querySelector('.nav-links')?.classList.remove('show');
  }
  //#endregion

  user!:Root;
  UserCome()
  {
     this._UserData.getUser().subscribe({
      next:res=>{
        console.log();
        this.user=res
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  //#region popup
  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
  //#endregion
  
}
