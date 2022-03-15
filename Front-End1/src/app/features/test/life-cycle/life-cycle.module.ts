import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { ParentLifeCycleComponent } from './parent-life-cycle.component';
import { ChildLifeCycleComponent } from './child-life-cycle/child-life-cycle.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ParentLifeCycleComponent,
    ChildLifeCycleComponent
  ],
  imports: [
    CommonModule,
    LifeCycleRoutingModule,
    SharedModule
  ]
})
export class LifeCycleModule { }
