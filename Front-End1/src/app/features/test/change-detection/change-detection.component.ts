import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {
  persons: any[] = [];
  data: string | number | boolean;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.persons.push({
      name: `Name ${this.persons.length}`
    })

    this.data = '1'
  }

  edit() {
    this.persons[0].name = 'update';
  }

  remove() {
    this.persons.pop();
    this.data = '0'
  }

  reset() {
    this.persons = [];
  }
}
