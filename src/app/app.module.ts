import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './services/security/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilAgentComponent } from './accueil-agent/accueil-agent.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilUtilisateurComponent } from './accueil-utilisateur/accueil-utilisateur.component';
import { ListeLogementComponent } from './liste-logement/liste-logement.component';
import { LocataireComponent } from './locataire/locataire.component';
import { LogementComponent } from './logement/logement.component';
import { DashboardLogementComponent } from './dashboard-logement/dashboard-logement.component';
import { ChartsModule } from 'ng2-charts';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilAgentComponent,
    AccueilUtilisateurComponent,
    ListeLogementComponent,
    LocataireComponent,
    LogementComponent,
    DashboardLogementComponent,
    ModifierProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    ChartsModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
