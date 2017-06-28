import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  goToDetail (spesa) {
    this.navCtrl.push(DetailPage);
  }

  expenses = [{
    data: '2017-05-03',
    testo: 'Biglietto per Venezia',
    categoria: 'Viaggi',
    spesa: 26
  }, {
    data: '2017-02-17',
    testo: 'Concerto',
    categoria: 'Svago',
    spesa: 82
  }, {
    data: '2017-01-23',
    testo: 'Ingresso presepe vivente',
    categoria: 'Viaggi',
    spesa: 100
  }]

}
