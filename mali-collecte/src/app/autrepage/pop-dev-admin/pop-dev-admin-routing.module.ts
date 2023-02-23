import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopDevAdminPage } from './pop-dev-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PopDevAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopDevAdminPageRoutingModule {}
