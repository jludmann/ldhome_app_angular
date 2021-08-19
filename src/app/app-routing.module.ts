import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilAgentComponent } from './accueil-agent/accueil-agent.component';
import { AccueilUtilisateurComponent } from './accueil-utilisateur/accueil-utilisateur.component';
import { ListeLogementComponent } from './liste-logement/liste-logement.component';
import { IsLoggedInGuardService } from './services/security/is-logged-in-guard.service';
import { IsAgentGuardService } from './services/security/is-agent-guard.service';
import { LocataireComponent } from './locataire/locataire.component';
import { LogementComponent } from './logement/logement.component';
import { DashboardLogementComponent } from './dashboard-logement/dashboard-logement.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';




const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'agent/accueil', component: AccueilAgentComponent, canActivate: [IsLoggedInGuardService, IsAgentGuardService]},
  {path:'utilisateur/accueil', component: AccueilUtilisateurComponent, canActivate: [IsLoggedInGuardService]},
  {path: 'utilisateur/logements', component: ListeLogementComponent, canActivate: [IsLoggedInGuardService]},
  {path: 'utilisateur/locataire', component: LocataireComponent, canActivate: [IsLoggedInGuardService]},
  {path: 'utilisateur/logement', component: LogementComponent, canActivate: [IsLoggedInGuardService]},
  {path: 'utilisateur/logement/dashboard', component: DashboardLogementComponent, canActivate: [IsLoggedInGuardService]},
  {path: 'utilisateur/profil', component: ModifierProfilComponent, canActivate: [IsLoggedInGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
