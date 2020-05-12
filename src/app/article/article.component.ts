import { Component, OnInit, HostBinding } from '@angular/core';

import {Article} from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass= 'row'; 
article: Article;
  constructor() {
    this.articles = [
    new Article('Angular 2','http://angular.io',10),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  ngOnInit() {
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

}