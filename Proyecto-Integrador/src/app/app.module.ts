import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialMediaBtnsComponent } from './components/social-media-btns/social-media-btns.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    LogoAPComponent,
    SocialMediaBtnsComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducationComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
