import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Locataire } from '../model/locataire';
import { LocataireService } from '../services/locataire.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {

  urlSymboleHomme: string ='assets/images/symbole_homme.png';
  urlSymboleFemme: string ='assets/images/symbole_femme.jfif';
  urlDefaultProfilePicture: string ='assets/images/utilisateur.png';

  private souscription: Subscription | undefined;
  public locataire: any;

  constructor(private locataireService: LocataireService) {
   }

  ngOnInit(): void {

    this.souscription = this.locataireService.locataire$.subscribe(
      (locataire: Locataire) => {
          this.locataire= locataire;
                   
      },
      (error) => {console.log(error.message)},
      () => {}
    );

    this.locataireService.updateLocataire(this.locataire.id);

  }

}
