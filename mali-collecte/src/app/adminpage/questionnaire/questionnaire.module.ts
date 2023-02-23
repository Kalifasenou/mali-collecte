import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { QuestionnairePage } from './questionnaire.page';
import { QuestionsListComponent } from "./recuperer-questions-popup";

@NgModule({
    declarations: [QuestionnairePage],
    imports: [
        CommonModule,
        FormsModule,
        // HttpClient,
        IonicModule,
        QuestionnairePageRoutingModule,
        // QuestionsListComponent
    ]
})
export class QuestionnairePageModule {}
