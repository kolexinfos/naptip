import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TrackPage } from '../track/track';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAction(){
    this.navCtrl.setRoot(TrackPage);
  }

}
