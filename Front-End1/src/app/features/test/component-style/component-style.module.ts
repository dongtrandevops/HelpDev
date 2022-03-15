import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStyleRoutingModule } from './component-style-routing.module';
import { ComponentStyleParentComponent } from './component-style-parent.component';
import { ComponentStyleChildComponent } from './component-style-child/component-style-child.component';


@NgModule({
  declarations: [
    ComponentStyleParentComponent,
    ComponentStyleChildComponent
  ],
  imports: [
    CommonModule,
    ComponentStyleRoutingModule
  ]
})
export class ComponentStyleModule { }
