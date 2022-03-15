import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hd-view-encapsulation-none',
  templateUrl: './view-encapsulation-none.component.html',
  styleUrls: ['./view-encapsulation-none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
