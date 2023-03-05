import { QuestionnairesService } from 'src/app/services/questionnaires.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnquetesService } from 'src/app/services/enquetes.service';

@Component({
  selector: 'app-details-enquete',
  templateUrl: './details-enquete.page.html',
  styleUrls: ['./details-enquete.page.scss'],
})
export class DetailsEnquetePage implements OnInit {

  enquete: any;
  id: any;
  questionnaires: any;
  listeQuestions: any;
  listeQuestionnaireQuestions: any;

  quest:any;

id1:any

  NouvelleQuestion:any = {
    intitule: null,
    type: null
  };

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



  constructor(private route: ActivatedRoute, private enquetesService: EnquetesService, private questionnairesService: QuestionnairesService) {
  }

  ngOnInit() {
    this.id1 = this.route.snapshot.params['id'];

    console.log("hhhhhhhhhhhhhhhhhh: " + this.id1);

    this.enquetesService.VoirDescriptionEnquete(this.id1).subscribe(data => { //recuration de la l'id de l'enquete de l'affichage general pour afficher une enquete particuliere
      this.enquete = data;
      console.log(data);
    });

    this.questionnairesService.AfficherQuestionnaireparIdEnquete(this.id1).subscribe(data => { //recuperation de l'id de l'enquete pour afficher le questionnaire
      this.questionnaires = data;
      console.log("gggggggg: " + JSON.stringify(data));
      this.quest = JSON.parse(JSON.stringify(data));

      console.log("mon id : " + this.quest.id);

      this.questionnairesService.getQuestionsByQuestionnaireId(this.questionnaires.id).subscribe(data => { //recuperation de l'id du questionnaire pour afficher les question du question
        this.listeQuestionnaireQuestions = data;
        console.log(data); //
      });

    });
  }


  @ViewChild('addQuestionModal') addQuestionModal: any;

  // Ouvre le popup modal pour ajouter une question
  openModal() {
    this.addQuestionModal.present();
  }

  // Ferme le popup modal pour ajouter une question
  closeModal() {
    this.addQuestionModal.dismiss();
  }

    // Ajoute une question au questionnaire

  ajouterQuestions() {
    // const questionnaireId = this.questionnaires.id;

    this.questionnairesService.addQuestionsToQuestionnaire(this.NouvelleQuestion.intitule,this.NouvelleQuestion.type, this.questionnaires.id).subscribe(data => {
      this.listeQuestions=data;
      //alert(JSON.stringify(data))
     if(this.listeQuestions.status == 1){
      this.setOpen(false);

      this.questionnairesService.getQuestionsByQuestionnaireId(this.questionnaires.id).subscribe(data => {
        this.listeQuestionnaireQuestions = data;
        console.log(data);
      });
     }else{

     }

    });


  }

  }


