import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateUrlRoutingModule } from './calculate-url-routing.module';
import { CalculateUrlComponent } from './calculate-url.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CalculateUrlComponent
  ],
  imports: [
    CommonModule,
    CalculateUrlRoutingModule,
    SharedModule
  ]
})
export class CalculateUrlModule { }
