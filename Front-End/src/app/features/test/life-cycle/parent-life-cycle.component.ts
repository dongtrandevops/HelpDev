import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildLifeCycleComponent } from './child-life-cycle/child-life-cycle.component';

@Component({
  selector: 'hd-parent-life-cycle',
  templateUrl: './parent-life-cycle.component.html',
  styleUrls: ['./parent-life-cycle.component.scss']
})
export class ParentLifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked {
  parentName: string;
  ngOnchange: string;
  ngAfterContentInitData: any[] = []
  ngAfterContentChecked: string;
  ngAfterContentChecked1: string;
  isShowContent: boolean

  constructor() { }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ParentLifeCycleComponent --------- ngAfterViewInit')
  }

  ngOnInit(): void {
    this.parentName = 'David'
  }

  onAfterContentChecked(event: any) {
    // this.isShowContent = event.target.value === 'true' ? true : false;
  }
}
