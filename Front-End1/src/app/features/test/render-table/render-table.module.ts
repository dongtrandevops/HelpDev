import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderTableRoutingModule } from './render-table-routing.module';
import { RenderTableComponent } from './render-table.component';


@NgModule({
  declarations: [
    RenderTableComponent
  ],
  imports: [
    CommonModule,
    RenderTableRoutingModule
  ]
})
export class RenderTableModule { }
