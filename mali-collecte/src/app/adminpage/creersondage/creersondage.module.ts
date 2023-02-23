import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreersondagePageRoutingModule } from './creersondage-routing.module';

import { CreersondagePage } from './creersondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreersondagePageRoutingModule
  ],
  declarations: [CreersondagePage]
})
export class CreersondagePageModule {}
