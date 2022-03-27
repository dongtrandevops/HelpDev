import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestSomethingRoutingModule } from './test-something-routing.module';
import { FilterPeoplePipe, TestSomethingComponent } from './test-something.component';


@NgModule({
  declarations: [
    TestSomethingComponent,
    FilterPeoplePipe
  ],
  imports: [
    CommonModule,
    TestSomethingRoutingModule
  ]
})
export class TestSomethingModule { }
