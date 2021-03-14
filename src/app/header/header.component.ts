import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brand = 'conduit';
  search = '';
  counter = 22;
  keyword = '';
  constructor() {}

  ngOnInit(): void {}

  doSearch(event: MouseEvent) {
    console.log(event);
    this.keyword += '!';
    this.counter ++;
  }

  keywordInput(event: InputEvent) {
    console.log(event);
  }

  wrapInput(element: HTMLInputElement) {
    return element;
  }
}
