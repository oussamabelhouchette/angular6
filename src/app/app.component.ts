import { Component } from '@angular/core';
import { ArticleModel } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book1chapiter';
  articles :ArticleModel[];
constructor(){
  this.articles = [new ArticleModel('angular 6', 'http://angular.io', 4),
  new ArticleModel('angular 5', 'http://angular.io', 3),
  new ArticleModel('angular 2', 'http://angular.io', 2)]
}
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new ArticleModel(title.value, link.value, 0));
 title.value = '';
 link.value = '';
    return false;
  }
  sortedArticles(): ArticleModel[] {
     return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
     }
}
