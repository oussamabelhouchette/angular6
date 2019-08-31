import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ArticleModel } from '../article.model';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input('article') article :ArticleModel;
  @HostBinding('attr.class') cssClass = 'row';
  constructor() {

  }

  ngOnInit() {
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
