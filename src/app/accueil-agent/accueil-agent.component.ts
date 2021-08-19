import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-accueil-agent',
  templateUrl: './accueil-agent.component.html',
  styleUrls: ['./accueil-agent.component.css']
})
export class AccueilAgentComponent implements OnInit {

  urlImageAddLogement: any="assets/images/ajouter_logement.png";
  urlImageAddLocataire: any="assets/images/ajouter_locataire.png";
  urlImageAddIntervention: any="assets/images/ajouter_intervention.png";
  urlImageAddPdf: any="assets/images/ajouter_pdf.png"
  
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridDay',
    locale: frLocale,
    allDaySlot: false,
    slotMinTime:"08:00:00",
    slotMaxTime:"20:00:00"
  }


  

}
