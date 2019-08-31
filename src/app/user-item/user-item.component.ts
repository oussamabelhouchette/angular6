import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input('name')  name: string;

  constructor() {
    this.name = 'oussama';
  }

  ngOnInit() {
  }

}
