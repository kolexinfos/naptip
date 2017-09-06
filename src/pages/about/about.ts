import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  onRegister(){
    this.navCtrl.setRoot(WelcomePage);
  }

   onPhoto(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
