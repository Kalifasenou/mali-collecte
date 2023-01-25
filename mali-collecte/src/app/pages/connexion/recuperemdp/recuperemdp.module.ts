import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperemdpPageRoutingModule } from './recuperemdp-routing.module';

import { RecuperemdpPage } from './recuperemdp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperemdpPageRoutingModule
  ],
  declarations: [RecuperemdpPage]
})
export class RecuperemdpPageModule {}
