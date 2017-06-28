import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SpeseService } from '../../app/spese.service';
import { Spesa } from '../../app/spese.model';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  spesa: Spesa;
  categorie: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private speseServizio: SpeseService) {
    this.spesa = navParams.data;
    this.categorie = speseServizio.categorie;
  }

}
