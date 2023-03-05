import { UsersService } from './../../services/users.service';
import { PopupPage } from './../../autrepage/popup/popup.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { QuestionsListComponent } from './recuperer-questions-popup';
import { switchMap } from 'rxjs';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';
import { ActivatedRoute } from '@angular/router';
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
  questionnaireId:any;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private form : FormBuilder,
    private usersService : UsersService,
    private questionnaireService: QuestionnairesService,
    private route: ActivatedRoute
  ) { }

  myForm = new FormGroup({
    tranche: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    localite: new FormControl('', [Validators.required])
  })


  async cancelForm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir annuler cette enquête?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.navCtrl.navigateBack('/details-enquete');
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
    this.questionnaireId = this.route.snapshot.params['quest'];
  }

  // async submitForm(form: { valid: any; }) {
  //   if (form.valid) {
  //     const modal = await this.modalCtrl.create({
  //       component: QuestionsListComponent,
  //       componentProps: {
  //         selectedType: this.selectedType,
  //         questions: this.questions
  //       }
  //     });
  //     await modal.present();
  //   }
  // }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  envoyerForm(){
    if(this.myForm.valid){

     const repondant = {
      "genre":this.myForm.controls.genre.value,
      "tranche":this.myForm.controls.tranche.value,
      "localite":this.myForm.controls.localite.value
     }

     this.usersService.assignerQuestionADesUers(this.questionnaireId, repondant).subscribe(data => {
      console.log(data);
     })

    }
  }



  assignerQuestionnaire() {
    this.usersService.voirToutUser().pipe(
      switchMap((users: any[]) => {
        // Filtrer les utilisateurs en fonction de l'âge, du genre et de la localité
        const filteredUsers = users.filter(user => {
          const tranche = user.tranche;
          const genre = user.genre;
          const localite = user.localite;
          return localite === this.selectedAgeRange && genre === this.selectedGender && this.selectedRegion.includes(localite);
        });
        // Appeler la méthode assignerQuestionADesUers() de votre service backend
        let questionnaire : any ; // Remplacez cet exemple avec le questionnaire que vous souhaitez assigner
        return this.usersService.assignerQuestionADesUers(questionnaire, filteredUsers);
      })
    ).subscribe((questionnaire: any) => {
      console.log('Questionnaire assigné avec succès à des utilisateurs');
    });
  }

}
