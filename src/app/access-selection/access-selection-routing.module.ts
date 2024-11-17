import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessSelectionPage } from './access-selection.page';

const routes: Routes = [
  {
    path: '',
    component: AccessSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessSelectionPageRoutingModule {}
