import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationShadownComponent } from './view-encapsulation-shadown/view-encapsulation-shadown.component';


@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationShadownComponent
  ],
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule
  ]
})
export class ViewEncapsulationModule { }
