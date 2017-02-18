import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Dashboard } from '../pages/dashboard/dashboard';
import { IngredientCountPage } from '../pages/ingredient-count/ingredient-count';
import { PastMealsPage } from '../pages/past-meals/past-meals';
import { MealCatalogPage } from '../pages/meal-catalog/meal-catalog';


@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Dashboard;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: Dashboard },
      { title: 'Past Meals', component: PastMealsPage },
      { title: 'Your Ingredients', component: IngredientCountPage },
      { title: 'Meal Catalog', component: MealCatalogPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
