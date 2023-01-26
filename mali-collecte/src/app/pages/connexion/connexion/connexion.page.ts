import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ILoginRetrieve } from 'src/models/ilogin/ilogin';
import { AuthenticationService } from 'src/services/authentication/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }


  onLogin() {
    this.authenticationService.login(<ICI_TU_METS_LES_PARAMETRES>).subscribe({
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
