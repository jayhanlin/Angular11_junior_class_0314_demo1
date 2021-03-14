import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brand = 'conduit';
  search='';
  constructor() {}

  ngOnInit(): void {}

  change(value: string): void {
    this.brand = 'CONDUIT';
    this.search = value;
  }
}
