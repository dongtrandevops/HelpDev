import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRxjsRoutingModule } from './test-rxjs-routing.module';
import { TestRxjsComponent } from './test-rxjs.component';


@NgModule({
  declarations: [
    TestRxjsComponent
  ],
  imports: [
    CommonModule,
    TestRxjsRoutingModule
  ]
})
export class TestRxjsModule { }
