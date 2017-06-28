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
  constructor(private navCtrl: NavController, private speseServizio:SpeseService) {
    this.expenses = speseServizio.expenses;
  }

  goToDetail (spesa?: SpesaInterface) {
    this.navCtrl.push(DetailPage, spesa ? spesa.id: undefined);
  }
}
