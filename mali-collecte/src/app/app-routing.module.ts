import { PopoverController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  },
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
    path: 'questionnaire/:quest',
    loadChildren: () => import('./adminpage/questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
  {
    path:'popup',
    loadChildren:() => import('./autrepage/popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'pop-dev-admin',
    loadChildren: () => import('./autrepage/pop-dev-admin/pop-dev-admin.module').then( m => m.PopDevAdminPageModule)
  },
  {
    path: 'creer-enquete',
    loadChildren: () => import('./adminpage/creer-enquete/creer-enquete.module').then( m => m.CreerEnquetePageModule)
  },
  {
    path: 'creersondage',
    loadChildren: () => import('./adminpage/creersondage/creersondage.module').then( m => m.CreersondagePageModule)
  },
  {
    path: 'creerquestionnaire/:id',
    loadChildren: () => import('./adminpage/creerquestionnaire/creerquestionnaire.module').then( m => m.CreerquestionnairePageModule)
  },
  {
    path: 'details-enquete/:id',
    loadChildren: () => import('./adminpage/details-enquete/details-enquete.module').then( m => m.DetailsEnquetePageModule)
  },
  {
    path: 'formulairedenquete',
    loadChildren: () => import('./pages/formulairedenquete/formulairedenquete.module').then( m => m.FormulairedenquetePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
