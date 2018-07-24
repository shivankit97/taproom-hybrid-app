import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  result: string;
  region: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.result = this.navParams.get('element');
  }

  opencontact() {
    this.navCtrl.push(ContactPage);
  }

  openlogin() {
    this.navCtrl.push(LoginPage);
  }

  search() {
    this.result = this.region;
  }

}
