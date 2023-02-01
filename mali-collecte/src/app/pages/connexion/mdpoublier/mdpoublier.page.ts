import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdpoublier',
  templateUrl: './mdpoublier.page.html',
  styleUrls: ['./mdpoublier.page.scss'],
})
export class MdpoublierPage implements OnInit {
  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public router:Router) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  onSubmit() {
    if (this.resetForm.valid) {
      // Implement logic to reset password here
      console.log('Email: ', this.resetForm.value.email);
        this.router.navigate(['/connexion']);
        const email = this.resetForm.controls['email'].value;

// send email here to the provided email address with reset password instructions
console.log(`Reset password request sent to ${email}`);

// navigate to login page after email has been sent
this.router.navigateByUrl('/connexion');
    } else {
      console.log('erreur dans la reinitialisation du mot de passe')

    }
  }

}
