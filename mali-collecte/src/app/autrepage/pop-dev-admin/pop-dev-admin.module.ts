import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopDevAdminPageRoutingModule } from './pop-dev-admin-routing.module';

import { PopDevAdminPage } from './pop-dev-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopDevAdminPageRoutingModule
  ],
  declarations: [PopDevAdminPage]
})
export class PopDevAdminPageModule {}
