import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { SpeseService } from '../../app/spese.service';
import { Spesa } from '../../app/spese.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses: Spesa[];
  constructor(private navCtrl: NavController, private speseServizio:SpeseService) {
    this.expenses = speseServizio.expenses;
  }

  goToDetail (spesa: Spesa) {
    this.navCtrl.push(DetailPage, spesa);
  }

}
