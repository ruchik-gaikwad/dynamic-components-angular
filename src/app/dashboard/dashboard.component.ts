import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaceDirective } from '../place.directive';
import { Place2Directive } from '../place2.directive';
import { Type } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { NewsComponent } from '../news/news.component';

// NEWS API- KEY: 762446145745489389851b973c7971c3

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(PlaceDirective, { static: true }) place: PlaceDirective;
  @ViewChild(Place2Directive, { static: true }) place2: Place2Directive;
  movies: any = [];
  news: any = [];

  constructor(private _http: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponents();
  }

  getMovieData() {
    return this._http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=46cb0826bc9d924445bc90903e183ebf')
  }

  getNewsData() {
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=762446145745489389851b973c7971c3')
  }

  loadComponents() {
      this.getMovieData().subscribe((movies: any) => {
          this.movies = movies.results; 
          this.getNewsData().subscribe((news: any) => {
            this.news = news.articles;
            
            this.movies.map(e => {
              const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MovieComponent);
              const viewContainerRef = this.place.viewContainerRef;
              // componentRef.clear();
              const componentRef = viewContainerRef.createComponent(componentFactory);
              (<MovieComponent>componentRef.instance).data = e; 
            })

            this.news.map(e => {
              const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsComponent);
              const  viewContainerRef =  this.place2.viewContainerRef;
              const componentRef = viewContainerRef.createComponent(componentFactory);
              (<NewsComponent>componentRef.instance).data = e;              
            })
          })
      })
  }
}
