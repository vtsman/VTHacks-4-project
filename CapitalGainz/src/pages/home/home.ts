import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/watson-data';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  val;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: Data) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.val = this._data.test();
  }

}
