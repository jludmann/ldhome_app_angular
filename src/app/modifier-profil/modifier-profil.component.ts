import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proprietaire } from '../model/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {

  urlSymboleHomme: string ='assets/images/symbole_homme.png';
  urlSymboleFemme: string ='assets/images/symbole_femme.jfif';
  urlDefaultProfilePicture: string ='assets/images/utilisateur.png';

  private souscription: Subscription | undefined;
  public proprietaire: any;

  constructor(private proprietaireService: ProprietaireService) { }

  ngOnInit(): void {

    this.souscription = this.proprietaireService.proprietaire$.subscribe(
      (proprietaire: Proprietaire) => {this.proprietaire = proprietaire},
      (error) => {console.log(error)}
    )

    this.proprietaireService.updateProprietaire();

  }

}
