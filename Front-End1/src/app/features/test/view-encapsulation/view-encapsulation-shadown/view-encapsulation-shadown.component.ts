import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hd-view-encapsulation-shadown',
  templateUrl: './view-encapsulation-shadown.component.html',
  styleUrls: ['./view-encapsulation-shadown.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
