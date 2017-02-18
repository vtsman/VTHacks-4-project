import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';

// import componennts for declaration module
import { Dashboard } from '../pages/dashboard/dashboard';
import { HelpPage } from '../pages/help/help';
import { IngredientCountPage } from '../pages/ingredient-count/ingredient-count';
import { LoginPage } from '../pages/login/login';
import { MealPage } from '../pages/meal/meal';
import { MealCatalogPage } from '../pages/meal-catalog/meal-catalog';
import { PastMealsPage } from '../pages/past-meals/past-meals';

// import providers for declaration in module
import { DataProvider } from '../providers/data-provider';
import { Login } from '../providers/login';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    HelpPage,
    LoginPage,
    MealPage,
    MealCatalogPage,
    IngredientCountPage,
    PastMealsPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    AppComponent,
    Dashboard,
    PastMealsPage,
    LoginPage,
    MealCatalogPage,
    IngredientCountPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    Login
  ]
})
export class AppModule { }
