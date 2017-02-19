import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { Data } from '../providers/data';
import { ClassifierPage } from '../pages/classifier/classifier';


var importData = [
  MyApp,
  Page1,
  Page2,
  HomePage,
  ClassifierPage
]
@NgModule({
  declarations: importData,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [ IonicApp ],
  entryComponents: importData,
  providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler }
    , Data ]
})
export class AppModule { }
