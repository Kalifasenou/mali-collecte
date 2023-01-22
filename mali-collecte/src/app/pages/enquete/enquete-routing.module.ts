import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquetePage } from './enquete.page';

const routes: Routes = [
  {
    path: '',
    component: EnquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquetePageRoutingModule {}
