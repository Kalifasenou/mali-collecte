import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerquestionnairePage } from './creerquestionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: CreerquestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerquestionnairePageRoutingModule {}
