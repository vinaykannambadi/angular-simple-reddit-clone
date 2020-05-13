import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArticleComponent } from './article/article.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, HelloComponent, ArticleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
