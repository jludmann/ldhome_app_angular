import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Logement } from '../model/logement';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {

  urlLogoCle: string = 'assets/images/cle.png'

  private souscription: Subscription | undefined;
  public logement: any;

  constructor(private logementService: LogementService, private router: Router) { }

  ngOnInit(): void {
    
    this.souscription = this.logementService.logement$.subscribe((logement: Logement) => {this.logement=logement;});

  }

  getDashboard(idLogement: number): void {
    this.router.navigate(['utilisateur/logement/dashboard']);
    this.logementService.updateLogement(idLogement);
  }

}
