import { Route, Router, ActivatedRoute } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';
import { EnquetesService } from 'src/app/services/enquetes.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';
import { error } from 'console';

@Component({
  selector: 'app-creerquestionnaire',
  templateUrl: './creerquestionnaire.page.html',
  styleUrls: ['./creerquestionnaire.page.scss'],
})
export class CreerquestionnairePage implements OnInit {


  form : any = {
      libellequestionnaire:null,
    }
    id: any;
  questionnaire: Object;
  isFormsCreate= false;
  isFormsNotCreate= false;
  errormsg='';



  constructor(
    private questionnaireService: QuestionnairesService,
    private route:ActivatedRoute,
    private router:Router  ) {}


  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }


  AjoutQuestionnaire(): void{
    this.questionnaireService.CREERQuestionnaire(this.form.libellequestionnaire, this.id).subscribe({next: data => {
      this.isFormsCreate=true;
      this.isFormsNotCreate=false;
      this.questionnaire=data;
      if (this.isFormsCreate==true) {
        this.router.navigate(['/details-enquete', this.id])
     }
      console.log(data);}, error: err => {
      this.errormsg=err.error.message;
      this.isFormsNotCreate=true;
     }

    });
  }


  back(): void {
    window.history.back()
  }


}

