import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialApp';
 
  //#region Dark-Moood
  IsDarkMood=false ;
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    if(isPlatformBrowser(this.platformId)){
   const SaveMood = localStorage.getItem('dark-Mood');
    if(SaveMood === 'true'){
       this.enableDarkMode();
       this.IsDarkMood=true
    }
    }
    
  }

  toggleMode() {
    this.IsDarkMood = !this.IsDarkMood;

    if (this.IsDarkMood) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }

    localStorage.setItem('dark-Mood', this.IsDarkMood.toString());
  }

  enableDarkMode() {
    document.body.classList.add('darkMood');
  }

  disableDarkMode() {
    document.body.classList.remove('darkMood');
  }
  //#endregion
}
