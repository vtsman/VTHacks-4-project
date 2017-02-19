import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WatsonData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  constructor(public http: Http) {
    console.log('Hello WatsonData Provider');
  }

  getCapitalOne() {
    return this.http.get('http://api.reimaginebanking.com/accounts/58a914541756fc834d90559c/purchases?key=e27720efd690c95aeda7c6ed631b9b27')
  }



}
