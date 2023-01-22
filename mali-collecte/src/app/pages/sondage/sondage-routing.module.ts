import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SondagePage } from './sondage.page';

const routes: Routes = [
  {
    path: '',
    component: SondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SondagePageRoutingModule {}
