import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TrackPage } from '../pages/track/track';
import { WelcomePage } from '../pages/welcome/welcome';
import { PanicPage } from '../pages/panic/panic';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { HazardPage } from '../pages/hazard/hazard';
import { ActivityPage } from '../pages/activity/activity';
import { WizardPage } from '../pages/wizard/wizard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WizardPage,
    ActivityPage,
    HazardPage,
    ChatPage,
    PanicPage,
    WelcomePage,
    TrackPage,
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATMVto_eL_PmIE-xS0Dtsd_uaV4SXDtlY'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WizardPage,
    ActivityPage,
    HazardPage,
    ChatPage,
    PanicPage,
    WelcomePage,
    TrackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
