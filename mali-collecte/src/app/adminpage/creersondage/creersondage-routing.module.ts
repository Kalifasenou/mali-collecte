import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreersondagePage } from './creersondage.page';

const routes: Routes = [
  {
    path: '',
    component: CreersondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreersondagePageRoutingModule {}
