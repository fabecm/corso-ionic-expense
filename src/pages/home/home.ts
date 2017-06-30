import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { SpeseService } from '../../app/spese.service';
import { SpesaInterface } from '../../app/spese.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses: SpesaInterface[];
  constructor(private navCtrl: NavController, private speseServizio:SpeseService) {}

  ionViewDidEnter () {
    this.speseServizio.getExpenses()
      .then(response => this.expenses = response.json() as SpesaInterface[]);
  }

  goToDetail (spesa?: SpesaInterface) {
    if (spesa) {
      this.navCtrl.push(DetailPage, {
        id: spesa.id
      });
    } else {
      this.navCtrl.push(DetailPage);
    }
  }
}
