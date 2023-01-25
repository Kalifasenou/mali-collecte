import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperemdpPage } from './recuperemdp.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperemdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperemdpPageRoutingModule {}
