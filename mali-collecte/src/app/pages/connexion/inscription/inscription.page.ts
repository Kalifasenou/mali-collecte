import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

    // variable pour garder la valeur des inputes
    fullName: string;
    city: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;


    // pour verifier la validiter du formulaire
  formValid: boolean = false;

    // Error message
  errorMessage: string;

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

    // Verification des inputes du formulaire
    validateForm() {
      if (!this.fullName || !this.city || !this.phoneNumber || !this.password || !this.confirmPassword) {
        this.errorMessage = 'Please fill in all the fields.';
        return false;
      } else if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return false;
      } else if (this.phoneNumber.length !== 8) {
        this.errorMessage = 'Invalid phone number.';
        return false;
      }
      return true;
    }

  // Submit form
  onSubmit() {
    this.formValid = this.validateForm();
    if (this.formValid) {
      this.errorMessage = '';
      // Add code here to store the user data
      // ...
      this.router.navigate(['/connexion']);
    }
  }

}
