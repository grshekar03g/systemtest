import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserInfoModule} from "./user-info.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UserInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
