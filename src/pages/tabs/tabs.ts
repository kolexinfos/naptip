import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { PanicPage } from '../panic/panic';
import { HazardPage } from '../hazard/hazard';
import { ActivityPage } from '../activity/activity';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ActivityPage;
  tab3Root = HazardPage;
  tab4Root = ChatPage;
  tab5Root = PanicPage;

  constructor() {

  }
}
