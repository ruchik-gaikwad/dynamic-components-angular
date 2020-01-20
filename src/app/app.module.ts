import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NewsComponent } from './news/news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceDirective } from './place.directive';
import { from } from 'rxjs';
import { Place2Directive } from './place2.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NewsComponent,
    DashboardComponent,
    PlaceDirective,
    Place2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [MovieComponent, NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
