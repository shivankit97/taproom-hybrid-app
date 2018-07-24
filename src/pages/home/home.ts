import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  region: string;

  
  constructor(public navCtrl: NavController) {

  }

  opencontact() {
    this.navCtrl.push(ContactPage);
  }

  openlogin() {
    this.navCtrl.push(LoginPage);
  }

  search() {

    let data = {
    element: this.region,
    stop: 'yo boy'
  };
    //console.log(this.region);
    this.navCtrl.push(SearchPage,data);
  }

  btn1() {
    let data = {
      element: 'North Delhi'};
    this.navCtrl.push(SearchPage,data)
  }

  btn2() {
    let data = {
      element: 'South Delhi'};
    this.navCtrl.push(SearchPage,data)
  }

  btn3() {
    let data = {
      element: 'East Delhi'};
    this.navCtrl.push(SearchPage,data)
  }

  btn4() {
    let data = {
      element: 'West Delhi'};
    this.navCtrl.push(SearchPage,data)
  }
}

