import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hd-child-change-detection',
  templateUrl: './child-change-detection.component.html',
  styleUrls: ['./child-change-detection.component.scss']
})
export class ChildChangeDetectionComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() persons: any[]
  @Input() data: string | number | boolean;

  constructor() { }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }


  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.persons.firstChange === false) {
    //   console.log('ngOnChanges');
    // }
    console.log('ngOnChanges');

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
