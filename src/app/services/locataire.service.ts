import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  urlApiBase = environment.apiBaseUrl;

  public readonly locataire$: BehaviorSubject<any> =
    new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public updateLocataire(idLocataire?: number) : void {
    if (this.auth.isAgent()) {
      this.httpClient.get<any>(this.urlApiBase + '/agent/locataire/' + idLocataire)
                      .subscribe(
                        (valeurRetourne) => {this.locataire$.next(valeurRetourne);},
                        (error) => {console.log(error.message);},
                        () => {}
                      );
    }

    else if (this.auth.isProprietaire()) {
      this.httpClient.get<any>(this.urlApiBase + '/proprietaire/locataire/' + idLocataire)
                      .subscribe(
                        (valeurRetourne) => {this.locataire$.next(valeurRetourne);},
                        (error) => {console.log(error.message);},
                        () => {}
                      );
    }

    else {
      this.httpClient.get<any>(this.urlApiBase + '/locataire/locataire/')
                      .subscribe(
                        (valeurRetourne) => {this.locataire$.next(valeurRetourne);},
                        (error) => {console.log(error.message);},
                        () => {}
                      );
    }
  }
}
