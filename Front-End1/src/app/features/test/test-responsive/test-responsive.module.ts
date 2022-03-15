import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestResponsiveRoutingModule } from './test-responsive-routing.module';
import { TestResponsiveComponent } from './test-responsive.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TestResponsiveComponent
  ],
  imports: [
    CommonModule,
    TestResponsiveRoutingModule,
    SharedModule
  ]
})
export class TestResponsiveModule { }
