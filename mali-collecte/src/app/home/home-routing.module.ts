import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'Acceuil',
        loadChildren: () => import('../pages/accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'Enquete',
        loadChildren: () => import('../pages/enquete/enquete.module').then( m => m.EnquetePageModule)
      },
      {
        path: 'Sondage',
        loadChildren: () => import('../pages/sondage/sondage.module').then( m => m.SondagePageModule)
      },
      {
        path: 'Profil',
        loadChildren: () => import('../pages/profil/profil.module').then( m => m.ProfilPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
