import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerEnquetePageRoutingModule } from './creer-enquete-routing.module';

import { CreerEnquetePage } from './creer-enquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerEnquetePageRoutingModule
  ],
  declarations: [CreerEnquetePage]
})
export class CreerEnquetePageModule {}
