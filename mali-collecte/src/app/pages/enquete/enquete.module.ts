import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquetePageRoutingModule } from './enquete-routing.module';

import { EnquetePage } from './enquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquetePageRoutingModule
  ],
  declarations: [EnquetePage]
})
export class EnquetePageModule {}
