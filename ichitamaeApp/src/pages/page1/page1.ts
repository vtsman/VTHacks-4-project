import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit {
  url: string = 'http://172.30.111.135:3000/recipe';
  data = {};
  ingredients;
  loadData() {
    return this.http
      .get(this.url)
      .subscribe((data) => {
        this.data = (JSON.parse(data[ "_body" ]));
        console.log(this.data);
        this.ingredients = this.data[ 'ingredients' ];
        console.log(this.ingredients);
      });
  }
  constructor(public navCtrl: NavController, private http: Http) {
  }
  ngOnInit() {
    this.loadData();
  }
}
