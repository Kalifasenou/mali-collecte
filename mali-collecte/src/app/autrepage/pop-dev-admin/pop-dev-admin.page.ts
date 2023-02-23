import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pop-dev-admin',
  templateUrl: './pop-dev-admin.page.html',
  styleUrls: ['./pop-dev-admin.page.scss'],
})
export class PopDevAdminPage implements OnInit {

  personalEmail: string;
  professionalEmail: string;
  organizationType: string;
  organizationName: string;
  organizationNumber: string;
  organizationPost: string;
  occupiedPost: string;
  toastController: any;

  constructor(private http: HttpClient) { }


  ngOnInit() {
  }


  submitForm(form: NgForm) {
    if (form.valid) {
      // Récupérer les données du formulaire
      const data = {
        personalEmail: this.personalEmail,
        professionalEmail: this.professionalEmail,
        organizationType: this.organizationType,
        organizationName: this.organizationName,
        organizationNumber: this.organizationNumber,
        organizationPost: this.organizationPost,
        occupiedPost: this.occupiedPost
      };

      // Envoyer un email à l'administrateur avec les informations de l'utilisateur
      this.http.post('https://mail-sende-api-endpoint', data)
      .subscribe(response => {
        console.log('Email sent successfully');
        alert('Votre demande d\'administrateur a été envoyée. Veuillez patienter pour l\'approbation du super admin.');
      }, error => {
        console.error('Error sending email', error);
        alert('Une erreur s\'est produite lors de l\'envoi de votre demande. Veuillez réessayer plus tard.');
      });
      // ...

      // Afficher un message à l'utilisateur pour lui dire d'attendre l'approbation du super admin
      this.toastController.create({
        message: 'Votre demande a été envoyée avec succès. Veuillez attendre l\'approbation du super administrateur pour accéder aux fonctionnalités.',
        duration: 3000
      }).then((toast: { present: () => any; }) => toast.present());

      // Fermer le popover
      this.closePopover();
    }


}  closePopover() {
    throw new Error('Method not implemented.');
  }
}
