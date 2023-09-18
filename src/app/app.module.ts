import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BannerInformationComponent } from './components/banner-information/banner-information.component';
import { GalleryCreationsComponent } from './components/gallery-creations/gallery-creations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerInformationComponent,
    GalleryCreationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
