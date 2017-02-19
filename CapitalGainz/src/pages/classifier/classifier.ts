import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

/*
  Generated class for the Classifier page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-classifier',
  templateUrl: 'classifier.html'
})
export class ClassifierPage {
  capitalOne;
  constructor(public navCtrl: NavController, public navParams: NavParams, private data: Data) { }

  ionViewDidLoad() {
    this.capitalOne = this.data.getCapitalOne().subscribe((val) => {
      this.capitalOne = JSON.parse(val[ '_body' ]).slice(0, 25);
      console.log(this.capitalOne);
    }, (err) => {
      console.error(err);
    });
  }

}
