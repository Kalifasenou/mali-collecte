import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEnquetePage } from './details-enquete.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEnquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEnquetePageRoutingModule {}
