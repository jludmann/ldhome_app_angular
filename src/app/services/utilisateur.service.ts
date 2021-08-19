import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public readonly utilisateurConnecte$: BehaviorSubject<Utilisateur | undefined> =
    new BehaviorSubject<Utilisateur| undefined>(undefined);

  constructor(private httpClient: HttpClient) {}

  public updateUtilisateur(force?: boolean): void {

    if (this.utilisateurConnecte$.value === undefined || force) {

      this.httpClient
              .get<Utilisateur>(environment.apiBaseUrl + 'utilisateur/utilisateur')
              .subscribe(
                (valeurRetourne: Utilisateur) => {
                  this.utilisateurConnecte$.next(valeurRetourne);
                },
                () => {},
                () => {}
              );
    }
  }
}
