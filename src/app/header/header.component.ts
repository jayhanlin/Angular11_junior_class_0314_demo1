import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  isHighlight = false;

  @Output() keywordChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  doSearch(event: MouseEvent) {
    console.log(event);
    // this.keyword += '!';
    this.counter++;
    this.isHighlight = !this.isHighlight;
    this.keywordChange.emit(this.keyword);
  }

  keywordInput(event: InputEvent) {
    console.log(event);
  }

  wrapInput(element: HTMLInputElement) {
    return element;
  }

}
