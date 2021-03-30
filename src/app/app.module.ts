import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SlideComponent } from './layouts/slide/slide.component';
import { ServiceComponent } from './layouts/service/service.component';
import { WebcomeComponent } from './layouts/webcome/webcome.component';
import { ServiceHotComponent } from './layouts/service-hot/service-hot.component';
import { TeamComponent } from './layouts/team/team.component';
import { ConsultsComponent } from './layouts/consults/consults.component';
import { ExperienceComponent } from './layouts/experience/experience.component';
import { NewsComponent } from './layouts/library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    ServiceComponent,
    WebcomeComponent,
    ServiceHotComponent,
    TeamComponent,
    ConsultsComponent,
    ExperienceComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
