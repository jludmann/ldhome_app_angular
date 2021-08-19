import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  urlLogoLDHome:any = "assets/images/logo_ld_home.jpg";
  urlLogoContact:any = "assets/images/contact_us.jpg";
  urlLogoDeconnexion:any = "assets/images/deconnexion.png";
  urlLogoPropriete:any = "assets/images/propriete.png";
  urlLogoLocataire:any = "assets/images/locataire.png";
  urlLogoComptabilite:any = "assets/images/calculatrice.png";
  urlLogoInterventionTechnique:any = "assets/images/intervention_technique.png";
  urlLogoUtilisateur:any = "assets/images/utilisateur.png";
  urlLogoLoupe: any = "assets/images/loupe.png";
  url: string = "agent/logements";

  title: any;
  private roles: string[];
  isLoggedIn = false;
  isAgent = false;
  isLocataire = false;
  isProprietaire = false;
  mail: string;

  constructor(private router: Router, private auth: AuthService) {
    this.roles = [];
    this.mail = '';
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.isAgent = this.auth.isAgent();
    this.isLocataire = this.auth.isLocataire();
    this.isProprietaire = this.auth.isProprietaire();
  }
  
  logout(): void {
    this.auth.logout();
    this.onLogout();
  }

  onLogout(): void {
    this.router.navigate([""]).then(over => { window.location.reload()});
  }
  
}
