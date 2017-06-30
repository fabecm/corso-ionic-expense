import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { SpeseService } from '../../app/spese.service';
import { SpesaInterface } from '../../app/spese.model';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  spesa: SpesaInterface = {
    data: '',
    testo: '',
    categoria: '',
    spesa: 0
  };
  exist: boolean;
  categorie: string[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private speseServizio: SpeseService,
              private alertCtrl: AlertController) {

    if (navParams.get('id')) {
      this.exist = true;
      speseServizio.getSpesa(navParams.get('id'))
        .then(result => this.spesa = result.json() as SpesaInterface);
    } else {
      this.exist = false;
    }

    this.categorie = speseServizio.categorie;
  }

  saveSpesaToService () {
    if (this.exist) {
      this.speseServizio.saveSpesa(this.spesa.id, this.spesa).then(() => {
        this.navCtrl.pop();
      })
    } else {
      this.speseServizio.addSpesa(this.spesa).then(() => {
        this.navCtrl.pop();
      })
    }
  }

  removeSpesaFromService () {
    let alert = this.alertCtrl.create({
      title: 'Conferma eliminazione',
      message: `Sei sicuro di voler eliminare la spesa : "${this.spesa.testo}"`,
      buttons: [
        {
          text: 'Cancella'
        },
        {
          text: 'Conferma',
          handler: () => {
            this.speseServizio.removeSpesa(this.spesa.id).then(() => {
              this.navCtrl.pop();
            })
          }
        }
      ]
    });
    alert.present();
  }

}
