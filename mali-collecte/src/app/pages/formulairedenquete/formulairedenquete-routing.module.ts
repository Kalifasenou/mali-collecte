import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulairedenquetePage } from './formulairedenquete.page';

const routes: Routes = [
  {
    path: '',
    component: FormulairedenquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulairedenquetePageRoutingModule {}
