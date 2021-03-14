import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u> ';
  keyword = 'test';
  // getter
  get articles() {
    return this.articleService.articles;
  }
  constructor(private articleService: ArticlesService) {}

  searchArticles(keyword: string) {
    console.log(keyword);
    this.articleService.filterArticles(keyword);
    // if ($event) {
    //   this.articles = this.originalList.filter(
    //     (item) => item.title.indexOf($event) !== -1
    //   );
    // } else {
    //   this.articles = this.originalList;
    // }
  }
}
