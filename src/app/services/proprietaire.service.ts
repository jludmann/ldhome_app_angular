import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  urlApiBase = environment.apiBaseUrl;

  public readonly proprietaire$: BehaviorSubject<any> =
    new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public updateProprietaire(idProprietaire?: number): void {
    if (this.auth.isProprietaire()) {
      this.httpClient.get<any>(this.urlApiBase + '/proprietaire/proprietaire')
                      .subscribe((valeurRetourne) => {this.proprietaire$.next(valeurRetourne)},
                                  (error) => {console.log(error)});
    }

    else if (this.auth.isAgent()) {
      this.httpClient.get<any>(this.urlApiBase + '/agent/proprietaire/' + idProprietaire)
                      .subscribe((valeurRetourne) => {this.proprietaire$.next(valeurRetourne)},
                                  (error) => {console.log(error)});
    }
  }

}
