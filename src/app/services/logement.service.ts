import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  urlApiBase = environment.apiBaseUrl;

  public readonly listeLogement$: BehaviorSubject<any> =
    new BehaviorSubject<any>(undefined);

    public readonly logement$: BehaviorSubject<any> =
    new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public updateLogement(idLogement: number): void {
    
    this.httpClient.get<any>(this.urlApiBase + '/user/logement/' + idLogement)
                    .subscribe(
                      (valeurRetourne) => {
                        this.logement$.next(valeurRetourne);
                      },
                      (error) => {console.log(error.message);},
                      () => {}
                    );

  }

  public updateListeLogement(): void {

      if (this.authService.isAgent()){

        this.httpClient
              .get<any>(this.urlApiBase +  '/agent/logements')
              .subscribe(
                (valeurRetourne: any) => {
                  this.listeLogement$.next(valeurRetourne);
                  
                },
                (error) => {console.log(error.message)},
                () => {}
              );
      }

      else if (this.authService.isProprietaire()) {
        this.httpClient
              .get<any>(this.urlApiBase + '/proprietaire/logements')
              .subscribe(
                (valeurRetourne: any) => {
                  this.listeLogement$.next(valeurRetourne);
                },
                (error) => {console.log(error)},
                () => {}
              );
      }

      else if (this.authService.isLocataire()) {
        this.httpClient
              .get<any>(this.urlApiBase + '/locataire/logements')
              .subscribe(
                (valeurRetourne: any) => {
                  this.listeLogement$.next(valeurRetourne);
                },
                (error) => {console.log(error)},
                () => {}
              );
      }
  }
}


