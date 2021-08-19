
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Logement } from '../model/logement';
import { LocataireService } from '../services/locataire.service';
import { LogementService } from '../services/logement.service';



@Component({
  selector: 'app-liste-logement',
  templateUrl: './liste-logement.component.html',
  styleUrls: ['./liste-logement.component.css']
})
export class ListeLogementComponent implements OnInit {

  private souscription: Subscription | undefined;
  public listeLogement: any;
  sortedData: Logement[] = [];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  displayedColumns: string[] = ['occupe', 'dateSortie', 'typeLogement', 'surface', 'etage', 'nbPersonnes', 'ville', 'quartier', 'adresse', 'codePostal', 'loyer', 'sommeCharges', 'total', 'locataire.nom', 'proprietaire.nom'];


  constructor(private logementService: LogementService, private locataireService: LocataireService, private router: Router) { }

  ngOnInit(): void {

    this.souscription = this.logementService.listeLogement$.subscribe(
      (listeLogement: Logement[]) => {
          this.listeLogement= new MatTableDataSource(listeLogement);
          this.listeLogement.sort=this.sort;          
      },
      (error) => {console.log(error.message)},
    );

    this.logementService.updateListeLogement();
  }

  getLocataire(idLocataire: number | undefined) {
      this.router.navigate(['utilisateur/locataire']);
      this.locataireService.updateLocataire(idLocataire);
      console.log(idLocataire);
  }

  getLogement(idLogement: number) {
    this.router.navigate(['utilisateur/logement']);
    this.logementService.updateLogement(idLogement);
  }
}

