import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessSelectionPageRoutingModule } from './access-selection-routing.module';

import { AccessSelectionPage } from './access-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessSelectionPageRoutingModule
  ],
  declarations: [AccessSelectionPage]
})
export class AccessSelectionPageModule {}
