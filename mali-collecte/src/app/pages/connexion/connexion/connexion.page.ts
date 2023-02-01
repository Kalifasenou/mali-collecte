import { ILogin } from './../../../../models/ilogin/ilogin';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginRetrieve } from 'src/models/ilogin/ilogin';
import { AuthenticationService } from 'src/services/authentication/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  connexionForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')]),
  });

  login:ILogin
  username:string
  password:string

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }


  onLogin() {

    if (!this.username || !this.password) {
      console.error('Username et password sont obligatoire ');
      return;
    }

    this.login.password=this.password;
    this.login.username=this.username;

    this.authenticationService.login(this.login).subscribe({
      next: (loginResponse: ILoginRetrieve) => {
        console.log(loginResponse);
        // Lorsque la requête s'est bien passée tu écris ta logique
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        // Il y a eu une erreur
      }
    }
    )
  }
}
