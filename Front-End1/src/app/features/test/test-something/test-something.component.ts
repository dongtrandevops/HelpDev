import { Component, OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): any[] {
    debugger
    return values.filter(v => v < 8);
  }
}

@Component({
  selector: 'hd-test-something',
  templateUrl: './test-something.component.html',
  styleUrls: ['./test-something.component.scss']
})
export class TestSomethingComponent implements OnInit {
  start: number = 0
  end: number = 0

  start1: number
  end1: number

  arr = [
    {
      name: 1,
      type: 'sea'
    },
    {
      name: 2,
      type: 'sea'
    },
    {
      name: 3,
      type: 'sea'
    },
    {
      name: 4,
      type: 'air'
    },
    {
      name: 5,
      type: 'air'
    },
    {
      name: 6,
      type: 'air'
    },
  ];
  input: any;

  constructor() { }

  ngOnInit(): void {
    this.end = this.arr.filter(c => c.type === 'sea').length;


    for (let index = 0; index < this.arr.length; index++) {
      if (this.arr[index].type == 'air') {
        this.start1 = index
        this.end1 = this.arr.length;
        break;
      }
    }
  }

  onDelete(i: number, mode: string) {
    if (mode == 'air') {
      const end = this.arr.filter(c => c.type === 'sea').length;
      this.arr.splice(end + i, 1)
    } else {
      this.arr.splice(i, 1)
    }

    this.end = this.arr.filter(c => c.type === 'sea').length;
    for (let index = 0; index < this.arr.length; index++) {
      if (this.arr[index].type == 'air') {
        this.start1 = index
        this.end1 = this.arr.length;
        break;
      }
    }
  }

  onAdd() {
    this.end = this.arr.filter(c => c.type === 'sea').length;
    this.arr.splice(this.end, 0, { name: this.arr.length + 1, type: 'sea' })
    this.end++
    this.start1++
    this.end1 = this.arr.length;

    console.log(this.arr)
  }

  onAdd1() {
    this.arr.push({ name: this.arr.length + 1, type: 'air' })
    this.end1 = this.arr.length;
    console.log(this.arr)
  }
}
