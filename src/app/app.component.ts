import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Dashboard';

  Pages = [
    {
      title: 'Home',
      url: '',
      icon: 'albums'
    }, 
    {
      title: 'Team',
      url: '/team',
      icon: 'person' 
    },
    {
      title: 'Find Us',
      url: '/contactus',
      icon: 'person'
    }
  ];
  constructor( private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,) {
      this.initializeApp();
    }
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
}
