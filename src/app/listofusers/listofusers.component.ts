import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.scss']
})
export class ListofusersComponent implements OnInit {
names: string[];
  constructor() {
    this.names = ['oussama', 'amin', 'fahmi', 'nesrine'];
  }

  ngOnInit() {
  }

}
