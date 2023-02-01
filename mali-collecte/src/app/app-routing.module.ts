import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'splash-screen',
  //   pathMatch: 'full'
  // },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'enquete',
    loadChildren: () => import('./pages/enquete/enquete.module').then( m => m.EnquetePageModule)
  },
  {
    path: 'sondage',
    loadChildren: () => import('./pages/sondage/sondage.module').then( m => m.SondagePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/connexion/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'mdpoublier',
    loadChildren: () => import('./pages/connexion/mdpoublier/mdpoublier.module').then( m => m.MdpoublierPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'recuperemdp',
    loadChildren: () => import('./pages/connexion/recuperemdp/recuperemdp.module').then( m => m.RecuperemdpPageModule)
  },
  {
    path: 'admin-accueil',
    loadChildren: () => import('./adminpage/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'profils',
    loadChildren: () => import('./adminpage/profils/profils.module').then( m => m.ProfilsPageModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./adminpage/questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
