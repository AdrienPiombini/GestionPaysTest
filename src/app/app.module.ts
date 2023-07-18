import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CountryManagementHeaderComponent} from './country-management-header/country-management-header.component';
import {RouterOutlet} from '@angular/router'
import {AppRoutingModule} from './app-routing.module'
import {CountryTabComponent} from './country-tab/country-tab.component';
import { ModalComponent } from './modal/modal.component'
import {DatePipe} from '@angular/common';
import { CountryDetailComponent } from './country-detail/country-detail.component'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    CountryManagementHeaderComponent,
    CountryTabComponent,
    ModalComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
