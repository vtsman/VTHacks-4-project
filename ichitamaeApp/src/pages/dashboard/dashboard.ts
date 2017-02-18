import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard implements OnInit {
  url: string = 'http://172.30.111.135:3000/recipe';
  data: Object = {};
  nutrition: Object = {};
  ingredients: Array<Object>;
  constructor(public navCtrl: NavController, private http: Http) {
  }
  ngOnInit() {
    this.loadData(this.url);
  }

  /**
   * loadData()
   * Calls url specified and grabs data necessary
   */
  loadData(url) {
    return this.http
      .get(url)
      .subscribe((data) => {
        this.data = JSON.parse(data[ "_body" ]);
        this.ingredients = this.data[ 'ingredients' ];
        this.nutrition = this.data[ 'nutrition' ];
      });
  }
}
