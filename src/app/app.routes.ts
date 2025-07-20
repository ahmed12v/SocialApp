import { Routes } from '@angular/router';
import { LoginComponent } from './features/Auth/login/login.component';
import { SignupComponent } from './features/Auth/signup/signup.component';
import { ResetPasswordComponent } from './features/Auth/reset-password/reset-password.component';
import { NotFoundComponent } from './features/component/not-found/not-found.component';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'login' , pathMatch : 'full'},
    //Athu
    {
        path : 'login' ,
        loadComponent:()=>
            import('./features/Auth/login/login.component').then((c)=>LoginComponent)
    },
    {
        path : 'SignUp' ,
        loadComponent:()=>
            import('./features/Auth/signup/signup.component').then((c)=>SignupComponent)
    },
    {
        path : 'resetPass' ,
        loadComponent:()=>
            import('./features/Auth/reset-password/reset-password.component').then((c)=>ResetPasswordComponent)
    },
    
    //Pages
    {
        path : 'home' ,
        loadComponent:()=>
            import('./features/pages/home/home.component').then((c)=>HomeComponent)
    },

    //Not Found
    {
        path : '**',
        loadComponent:()=>
            import('./features/component/not-found/not-found.component').then((c)=>NotFoundComponent)
    }
];
