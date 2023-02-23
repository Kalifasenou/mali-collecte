import { PopupPage } from './../../autrepage/popup/popup.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { QuestionsListComponent } from './recuperer-questions-popup';
// import { recuperer-questions-popup} from "./recuperer-questions-popup";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {


  selectedType: string;
  questions: string[];
  selectedAgeRange: string;
  selectedGender: string;
  selectedRegion: string[];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private form : FormBuilder
  ) { }


  // async submitForm(form: { valid: any; }) {
  //   if (form.valid) {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Confirmation',
  //       message: 'L\'enquête a été créée et la notification a été envoyée aux personnes concernées.',
  //       buttons: ['OK']
  //     });
  //     await alert.present();
  //   }
  // }

  async cancelForm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir annuler cette enquête?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.navCtrl.navigateBack('');
          }
        },
        {
          text: 'Non',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {
  }

  async submitForm(form: { valid: any; }) {
    if (form.valid) {
      const modal = await this.modalCtrl.create({
        component: QuestionsListComponent,
        componentProps: {
          selectedType: this.selectedType,
          questions: this.questions
        }
      });
      await modal.present();
    }
  }



  closeModal() {
    this.modalCtrl.dismiss();
  }
  // async submitForm(form: { valid: any; }) {
  //   if (form.valid) {
  //     const modal = await this.modalCtrl.create({
  //       component: PopupPage,
  //       componentProps: {
  //         selectedType: this.selectedType,
  //         questions: this.questions
  //       }
  //     });
  //     await modal.present();
  //   }
  // }
}
