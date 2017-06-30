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
  spesa: SpesaInterface;
  exist: boolean;
  categorie: string[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private speseServizio: SpeseService,
              private alertCtrl: AlertController) {
    let spesaDelServizio = speseServizio.getSpesa(navParams.data);
    if (spesaDelServizio.id) {
      this.exist = true;
      this.spesa = speseServizio.getSpesa(navParams.data);
    } else {
      this.exist = false;
      this.spesa = {
        data: '',
        testo: '',
        categoria: '',
        spesa: 0
      }
    }

    this.categorie = speseServizio.categorie;
  }

  saveSpesaToService () {
    if (this.exist) {
      this.speseServizio.saveSpesa(this.spesa.id, this.spesa);
    } else {
      this.speseServizio.addSpesa(this.spesa);
    }
    this.navCtrl.pop();
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
            this.speseServizio.removeSpesa(this.spesa.id);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
