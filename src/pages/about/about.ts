import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  onRegister(){
    this.navCtrl.setRoot(TabsPage);
  }

   onPhoto(){
    this.navCtrl.setRoot(TabsPage);
  }

}
