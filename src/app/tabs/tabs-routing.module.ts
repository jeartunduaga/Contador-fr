import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'transactions',
      //   loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)
      // },
      // {
      //   path: 'savings',
      //   loadChildren: () => import('../savings/savings.module').then(m => m.SavingsPageModule)
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
