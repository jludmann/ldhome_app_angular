import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-utilisateur',
  templateUrl: './accueil-utilisateur.component.html',
  styleUrls: ['./accueil-utilisateur.component.css']
})
export class AccueilUtilisateurComponent implements OnInit {

  urlLogoPropriete:any = "assets/images/propriete.png";
  urlLogoLocataire:any = "assets/images/locataire.png";
  urlLogoComptabilite:any = "assets/images/calculatrice.png";
  urlLogoInterventionTechnique:any = "assets/images/intervention_technique.png";
  urlLogoUtilisateur:any = "assets/images/utilisateur.png";
  urlLogoLoupe: any = "assets/images/loupe.png";
  urlImage1:any = "assets/images/image1.jpg";
  urlImage2:any = "assets/images/photo_luxembourg.jpg";
  urlImage3:any = "assets/images/image3.jpg";
  urlImage4:any = "assets/images/image4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
