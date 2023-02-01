import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(() => {
      this.router.navigateByUrl('/connexion');
    }, 5000);
  }

  ngOnInit() {
    console.log('Splash screen initialized');
  }

}
