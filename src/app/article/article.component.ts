import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass= 'row'; 
title: string;
link: string;
votes:number;
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
   }

  ngOnInit() {
  }

  voteUp(){
    this.votes += 1;
    return false;
  }

  voteDown(){
    this.votes -= 1;
    return false;
  }

}