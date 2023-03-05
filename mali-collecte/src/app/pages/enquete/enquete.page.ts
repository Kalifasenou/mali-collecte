import { QuestionnairesService } from 'src/app/services/questionnaires.service';
import { EnquetesService } from './../../services/enquetes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.page.html',
  styleUrls: ['./enquete.page.scss'],
})
export class EnquetePage implements OnInit {
    // Typically referenced to your ion-router-outlet
    presentingElement: Element | null;

  @ViewChild('popover') popover: { event: Event; };
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  ToutEnquete:any;
  lesEnquentesDunUser:any;

  title = 'Les enquêtes public ou ceux auxquelles vous avez été assignées';
  activityImage = '../../../assets/Logo-.png';
  activityName = '';
  begunDate = '';
  endDate = '';
  organization = '';

  showRejectButton = true;
  showViewMoreButton = true;
  showAcceptButton = true;

  reponses: { [id: number]: string } = {};

  currentUser:any;

  lesQuestionsDeLenquetes:any;

  surveyData:any[] = [];


  constructor(
    public popoverController: PopoverController,
    private enquetesService:EnquetesService,
    private storageService: StorageService,
    private questionnaireService: QuestionnairesService) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererLesDifferentesEnqutesAttribuerAUnUser();
    this.presentingElement = document.querySelector('.ion-page');
  }

  soumettreReponses() {

    for(let i = 0; i < this.lesQuestionsDeLenquetes.length; i++) {
      const id = "input" + i;
      const element = <HTMLInputElement>document.getElementById(id);
      const valeur = element?.value;

      const reponse = {
        "typetexte": valeur
      }
      console.log(valeur)

         this.questionnaireService.repondreaunequestion(this.currentUser.id, this.lesQuestionsDeLenquetes[i].id, reponse)
      .subscribe((responses) => {
        console.log(responses);
        // handle success
      }, (error) => {
        console.log(error);
        // handle error
      });
    }
  }


  recupererLesDifferentesEnqutesAttribuerAUnUser(){
    this.enquetesService.recupererLesDifferentesEnqutesAttribuerAUnUser(this.currentUser.id).subscribe(data =>{
      this.lesEnquentesDunUser=data;
      console.log(this.lesEnquentesDunUser);
    });
  }

  recuprerLesQuestionsParEnquete(idEquente:any){
    this.enquetesService.recuprerLesQuestionsParEnquete(idEquente).subscribe(data =>{

      this.lesQuestionsDeLenquetes = data;
      console.log(this.lesQuestionsDeLenquetes);
    });
  }

  reject() {
    console.log('Refuser button clicked');
  }

  viewMore() {
    console.log('Voir+ button clicked');
  }

  showQuestionsModal() {
    // console.log('Show questions modal for enquête with ID:');
    // add your logic to show the questions modal here
    this.recuprerLesQuestionsParEnquete(this.lesQuestionsDeLenquetes.id);
  }
}

