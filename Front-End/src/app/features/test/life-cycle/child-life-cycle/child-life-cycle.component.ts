import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hd-child-life-cycle',
  templateUrl: './child-life-cycle.component.html',
  styleUrls: ['./child-life-cycle.component.scss']
})
export class ChildLifeCycleComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild('content') content: ElementRef;
  @Input() ngOnchange: string

  ngOnchangesData: any[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngOnchange'].firstChange === false) {
      this.ngOnchangesData.push(this.ngOnchange);
    }
    console.log('ChildLifeCycleComponent', 'ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ChildLifeCycleComponent', 'ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked changed');
  }
}
