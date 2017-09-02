import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  onLogin(){
    this.navCtrl.setRoot(TabsPage);
  }

  onRegister(){
    this.navCtrl.setRoot(AboutPage);
  }

}
