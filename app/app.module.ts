import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyABKFPsTWLQySuaLFapLCI7U3Imx7fZotA",
    authDomain: "project1-173ce.firebaseapp.com",
    databaseURL: "https://project1-173ce.firebaseio.com",
    storageBucket: "project1-173ce.appspot.com",
    messagingSenderId: "261610909931"
  };

@NgModule({
  imports:      [ BrowserModule
                , AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
