import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u> ';
  keyword = 'test';
  // getter

  // get articles() {
  //   return this.articleService.articles;
  // }

  articles: Article[];

  constructor(private articleService: ArticlesService) {}
  ngOnInit() {
    this.articleService.getArticles().subscribe((data) => {
      console.log(data);
      this.articles = data;
    });
  }

  searchArticles(keyword: string) {
    // console.log(keyword);
    // this.articleService.filterArticles(keyword);

    this.articleService.getArticles(keyword).subscribe((data) => {
      this.articles = data;
    });

    // if ($event) {
    //   this.articles = this.originalList.filter(
    //     (item) => item.title.indexOf($event) !== -1
    //   );
    // } else {
    //   this.articles = this.originalList;
    // }
  }
}
