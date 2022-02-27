import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChildChangeDetectionComponent } from './change-detection/child-change-detection/child-change-detection.component';


@NgModule({
  declarations: [
  
    ChangeDetectionComponent,
       ChildChangeDetectionComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ]
})
export class ChangeDetectionModule { }
