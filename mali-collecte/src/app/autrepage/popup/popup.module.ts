import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupPageRoutingModule } from './popup-routing.module';
// import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import { PopupPage } from './popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // FormArray,
    PopupPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [PopupPage]
})
export class PopupPageModule {}
