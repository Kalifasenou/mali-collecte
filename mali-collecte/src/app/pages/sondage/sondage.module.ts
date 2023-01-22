import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SondagePageRoutingModule } from './sondage-routing.module';

import { SondagePage } from './sondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SondagePageRoutingModule
  ],
  declarations: [SondagePage]
})
export class SondagePageModule {}
