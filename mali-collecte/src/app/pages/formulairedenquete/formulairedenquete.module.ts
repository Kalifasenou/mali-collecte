import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulairedenquetePageRoutingModule } from './formulairedenquete-routing.module';

import { FormulairedenquetePage } from './formulairedenquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulairedenquetePageRoutingModule
  ],
  declarations: [FormulairedenquetePage]
})
export class FormulairedenquetePageModule {}
