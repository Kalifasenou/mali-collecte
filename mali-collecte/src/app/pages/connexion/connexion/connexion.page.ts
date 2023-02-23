import { Router } from '@angular/router';
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


  username:string
  password:string

  roles:any=[];

  constructor(private authenticationService: AuthenticationService,private router :Router) { }

  ngOnInit() {
  }


  onLogin() {

    if (!this.username || !this.password) {
      console.error('Username et password sont obligatoire ');
      return;
    }



    var login={
      'username': this.username,
      'password': this.password
    }


    this.authenticationService.login(login).subscribe({
      next: (loginResponse: ILoginRetrieve) => {
        console.log(loginResponse);

        this.roles=loginResponse.roles
        this.roles.forEach((role: string) => {
          if (role=="ROLE_ADMIN" ||role=="ROLE_MODERATOR") {
            this.router.navigate(['/admin-accueil']);
          }else if (role=="ROLE_USER") {
            this.router.navigate(['/home/accueil']);
          }

        });
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
