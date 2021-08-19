import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public readonly listeRole$: BehaviorSubject<string[]>;

  constructor(private httpClient: HttpClient) {
    this.listeRole$ = new BehaviorSubject<string[]>([]);
  }

  public updateListeUtilisateur(force?: boolean): void {

    if (this.listeRole$.value.length === 0 || force) {

      this.httpClient
              .get<string[]>(environment.apiBaseUrl + 'utilisateur/roles')
              .subscribe(
                (valeurRetourne: string[]) => {
                  this.listeRole$.next(valeurRetourne);
                },
                () => {},
                () => {}
              );
    }
  }
}