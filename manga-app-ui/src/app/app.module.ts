import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderTagComponent } from './header-tag/header-tag.component';
import { FooterTagComponent } from './footer-tag/footer-tag.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardBoxComponent } from './card-box/card-box.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpdatesPageComponent } from './updates-page/updates-page.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { CardListHorizontalComponent } from './card-list-horizontal/card-list-horizontal.component';
import { CardListVerticalComponent } from './card-list-vertical/card-list-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderTagComponent,
    FooterTagComponent,
    CarouselComponent,
    CardBoxComponent,
    AboutPageComponent,
    UpdatesPageComponent,
    BrowsePageComponent,
    CardListHorizontalComponent,
    CardListVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
