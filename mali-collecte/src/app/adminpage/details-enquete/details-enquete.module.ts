import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEnquetePageRoutingModule } from './details-enquete-routing.module';

import { DetailsEnquetePage } from './details-enquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEnquetePageRoutingModule
  ],
  declarations: [DetailsEnquetePage]
})
export class DetailsEnquetePageModule {}
