import { InscriptionService } from './../../../services/inscription.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  //Formulaire d'inscription
  forms:any= {
    username: '',
    email: '',
    password: '',
    prenom: '',
    nom: '',
    numero: '',
    localite: '',
    genre: '',
    organisation: '',
    datedenaissance: '',
  };

  confimerMDP: string;

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  // pour verifier la validiter du formulaire
  formValid: boolean = false;

  // Error message
  errorMessage: string;

  constructor(
    private router: Router,
    private inscriptionSErvice: InscriptionService
  ) {}

  ngOnInit() {}

  // Verification des inputes du formulaire
  // validateForm() {
  //   if (
  //     !this.forms.username ||
  //     !this.forms.nom ||
  //     !this.forms.prenom ||
  //     !this.forms.localite ||
  //     !this.forms.numero ||
  //     !this.forms.organisation ||
  //     !this.forms.password ||
  //     !this.forms.genre ||
  //     !this.forms.datedenaissance ||
  //     !this.forms.email
  //   ) {
  //     this.errorMessage = 'Please fill in all the fields.';
  //     return false;
  //   } else if (this.forms.password !== this.confimerMDP) {
  //     this.errorMessage = 'Passwords do not match.';
  //     return false;
  //   } else if (this.forms.numero.length !== 8) {
  //     this.errorMessage = 'Invalid phone number.';
  //     return false;
  //   }
  //   return true;
  // }

  // Submit form
  onSubmit() {}

  CreationCompte() {
    console.log('clique de connexion');
    // this.formValid = this.validateForm();
    // if (this.formValid) {
      this.errorMessage = '';
      // Add code here to store the user data
      // ...

      // if (this.validateForm()) {
        this.inscriptionSErvice.CreerUser(this.forms).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/connexion']);
        });
      }
    // }
  // }
}
