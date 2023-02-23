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
  isFormsCreate= false;
  isFormsNotCreate= false;
  questionnaires: any;
  listequestion: any;
  listeQuestionnaireQuestions: any;
  idquestionnaires: any;
  idlistequestion: any;
  // listeQuestionnaireQuestions: any[] = [];

  // enquete: any; // Define enquete property here

  constructor(private route: ActivatedRoute, private enquetesService: EnquetesService, private questionnairesService: QuestionnairesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)


    this.enquetesService.VoirDescriptionEnquete(this.id).subscribe(data => {
      this.enquete = data;
      console.log(data);
    });
 this.questionnairesService.AfficherQuestionnaireparIdEnquete(this.id).subscribe(data => {
      this.questionnaires = data;
      console.log(data);


      this.questionnairesService.getQuestionsByQuestionnaireId(this.questionnaires.id).subscribe(
      data => {
      this.listeQuestionnaireQuestions = data;
      console.log(data);
    });

    });


  }

  addQuestions(questions: any[]) {
    const questionnaireId = this.questionnaires.id;

    this.questionnairesService.addQuestionsToQuestionnaire(questions, this.id).subscribe(data => {
      this.listequestion=data;
      console.log('Questions added successfully');
      // Add any other action that needs to be performed after questions are added
    });


  }

  displayQuestions() {

  }


  }


