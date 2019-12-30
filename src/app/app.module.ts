import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';
import { HightlightDirective } from './directives/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevicedetailsComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
