import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Utilisateur } from 'src/app/model/utilisateur';
import { RoleService } from '../role.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public utilisateurConnecte$: BehaviorSubject<Utilisateur | undefined> =
    new BehaviorSubject<Utilisateur | undefined>(undefined);

  private listeRole: string[] = [];
  private httpClient: HttpClient;

  constructor(handler: HttpBackend, roleService: RoleService) {
    this.httpClient = new HttpClient(handler);

    const token = localStorage.getItem('token');

    if (token != null) {
      const utilisateur = this.tokenToUtilisateur(token);
      this.utilisateurConnecte$.next(utilisateur);
    }

    roleService.listeRole$.subscribe(
      (listeRole: string[]) => {
        this.listeRole = listeRole;
      }
    );
  }

  login(mail: string, password: string): Observable<Utilisateur> {

    return new Observable<Utilisateur>(observer => {

      this.httpClient
        .post(
          environment.apiBaseUrl + '/connexion',
          { mail, password },
          { responseType: 'text' })
        .subscribe((token: string) => {
          console.log(token);
          localStorage.setItem('token', token);

          const utilisateur = this.tokenToUtilisateur(token);
          this.utilisateurConnecte$.next(utilisateur);

          observer.next(utilisateur);
        }),
        (error: any) => {console.log(error.message)};
        ;
    });
  }

  private tokenToUtilisateur(token: string): Utilisateur {
    const decodedToken: any = jwt_decode(token);

    const utilisateur: Utilisateur = {
      listeRole: decodedToken.roles,
      id: decodedToken.id,
      mail: decodedToken.sub
    };
    return utilisateur;
  }

  isLoggedIn(): boolean {
    console.log(this.utilisateurConnecte$.value);
    return this.utilisateurConnecte$.value !== undefined && this.utilisateurConnecte$.value.mail !== undefined;
  }

  isAgent(): boolean {
    
    const utilisateur = this.tokenToUtilisateur(localStorage.getItem('token')!);
    const roles = utilisateur.listeRole;
    
    return roles.includes('ROLE_AGENT');
  }

  isLocataire(): boolean {
    
    const utilisateur = this.tokenToUtilisateur(localStorage.getItem('token')!);
    const roles = utilisateur.listeRole;
    
    return roles.includes('ROLE_LOCATAIRE');
  }

  isProprietaire(): boolean {
    
    const utilisateur = this.tokenToUtilisateur(localStorage.getItem('token')!);
    const roles = utilisateur.listeRole;
    
    return roles.includes('ROLE_PROPRIETAIRE');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.utilisateurConnecte$.next(undefined);
  }
}
