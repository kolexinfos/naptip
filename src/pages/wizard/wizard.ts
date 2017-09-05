import { Component } from '@angular/core';

import { MenuController, NavController, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'wizard.html'
})
export class WizardPage {
  slides: Slide[];
  showSkip = true;
  player:any;

  constructor(public loadingCtrl: LoadingController,
  public platform: Platform, public navCtrl: NavController, 
  public menu: MenuController) {
    
    //this.startPlaying();

    this.slides = [
      {
        title: 'NAPTIP',
        description: 'Welcome to the emergency management system of the Federal Republic of Nigeria. A system that is designed to serve as an anti-kidnap and  emergency rescus utility',
        image: 'assets/images/download.png',
      },
      {
        title: '<b>NAPTIP</b>',
        description: 'Welcome to the emergency management system of the Federal Republic of Nigeria. A system that is designed to serve as an anti-kidnap and  emergency rescus utility',
        image: 'assets/images/download.png',
      },
      {
        title: '<b>NAPTIP</b>',
        description: 'Welcome to the emergency management system of the Federal Republic of Nigeria. A system that is designed to serve as an anti-kidnap and  emergency rescus utility',
        image: 'assets/images/download.png'
      }
    ];

    this.platform.ready().then(() => {
    console.log("ionViewWillEnter called");
    
    });
  }

  startPlaying() {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading please wait...'
    });

    loadingPopup.present();

    this.player.play().then(() => {
      console.log('Playing');
      loadingPopup.dismiss();
    });
  }
  startApp() {

    this.navCtrl.setRoot(ContactPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);

  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);

  }

}
