import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { WelcomePage } from '../welcome/welcome';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  onLogin(){
    this.navCtrl.setRoot(WelcomePage);
  }

  onRegister(){
    this.navCtrl.setRoot(AboutPage);
  }

}
