import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Data } from '../providers/data';
import { ClassifierPage } from '../pages/classifier/classifier';


var importData = [
  MyApp,
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
