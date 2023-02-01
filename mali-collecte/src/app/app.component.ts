import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public routes:Router
  ) {
    // this.initializeApp()
  }


  // initializeApp(){
  //   this.routes.navigateByUrl("splash-screen")
  // }
}
