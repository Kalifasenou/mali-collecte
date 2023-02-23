import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerquestionnairePageRoutingModule } from './creerquestionnaire-routing.module';

import { CreerquestionnairePage } from './creerquestionnaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerquestionnairePageRoutingModule
  ],
  declarations: [CreerquestionnairePage]
})
export class CreerquestionnairePageModule {}
