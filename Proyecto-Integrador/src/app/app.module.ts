import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialMediaBtnsComponent } from './components/social-media-btns/social-media-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    LogoAPComponent,
    SocialMediaBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
