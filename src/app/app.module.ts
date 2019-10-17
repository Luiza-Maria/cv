import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { InformationService } from './information.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEducationService } from './add-education.service';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContactComponent,
    PortofolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [InformationService,AddEducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
