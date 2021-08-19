import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Logement } from '../model/logement';
import { LogementService } from '../services/logement.service';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-dashboard-logement',
  templateUrl: './dashboard-logement.component.html',
  styleUrls: ['./dashboard-logement.component.css']
})
export class DashboardLogementComponent implements OnInit {

  canvas1: any;
  canvas2: any;
  ctx1: any;
  ctx2: any;

  labels: string[] = [];
  data: number[] = [];



  private souscription: Subscription | undefined;
  public logement: any;

  constructor(private logementService: LogementService) { }

  ngOnInit(): void {

    

    this.souscription = this.logementService.logement$.subscribe(
      (logement: Logement) => {
        this.logement = logement;
        for (let i = 0; i < this.logement.listeCharge.length; i++) {
          this.labels[i] = this.logement.listeCharge[i].designation;
          this.data[i] = this.logement.listeCharge[i].valeur;
        }
      },
      (error) => {console.log(error.message)});
    
      console.log(this.logement);

    this.canvas1 = document.getElementById('myChart1');
    this.ctx1 = this.canvas1.getContext('2d');
    const myChart = new Chart(this.ctx1, {
    type: 'bar',
    data: {
    labels: ['Revenus', 'Charges'],
    datasets: [{
    label: 'Total cases.',
    data: [this.logement.loyer, this.logement.sommeCharges],
    borderWidth: 1,
    backgroundColor : ['blue', 'red']
    }]
    },
    options: {
    legend: {
    display: false
    },
    responsive: false,
    }
    });

    this.canvas2 = document.getElementById('myChart2');
    this.ctx2 = this.canvas2.getContext('2d');
    const myChart2 = new Chart(this.ctx2, {
    type: 'pie',
    data: {
    labels: this.labels,
    datasets: [{
    label: 'Total cases.',
    data: this.data,
    borderWidth: 1,
    backgroundColor : ['blue', 'red']
    }]
    },
    options: {
    legend: {
    display: true
    },
    responsive: false,
    }
    });

  }

}
