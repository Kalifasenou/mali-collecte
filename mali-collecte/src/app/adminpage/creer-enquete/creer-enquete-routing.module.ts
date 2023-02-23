import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerEnquetePage } from './creer-enquete.page';

const routes: Routes = [
  {
    path: '',
    component: CreerEnquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerEnquetePageRoutingModule {}
