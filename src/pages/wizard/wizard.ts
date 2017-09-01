import { Component } from '@angular/core';

import { MenuController, NavController, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


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
        title: 'Emergency Services',
        description: 'WELCOME TO THE WORLD OF ENTERPRISE DESIGN',
        image: 'img/logo.png',
      },
      {
        title: '<b>Junglenomics</b>',
        description: 'WELCOME TO THE WORLD OF ENTERPRISE DESIGN',
        image: 'img/logo.png',
      },
      {
        title: '<b>Junglenomics</b>',
        description: 'WELCOME TO THE WORLD OF ENTERPRISE DESIGN',
        image: 'img/logo.png'
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

    this.navCtrl.setRoot(TabsPage);
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
