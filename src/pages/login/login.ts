import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AuthService } from '../../app/auth.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private alertCtrl: AlertController) {
  }

  doLogin(){
    this.authService.getToken(this.username, this.password)
      .then(JWTData => {
        // I DATI SONO OK, Ho recuperato il token+
        const token = JWTData.json().token;
        this.authService.setLocalToken(token);
        this.navCtrl.push(HomePage);
      })
      .catch(() => {
        // QUALCOSA E' ANDATO STORTO (es. Pass Errata)
        let alert = this.alertCtrl.create({
          title: 'Errore Login',
          subTitle: 'Dati errati',
          buttons: ['Ok']
        });
        alert.present();
      })
  }
}
