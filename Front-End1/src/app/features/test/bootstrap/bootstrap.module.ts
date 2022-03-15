import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    SharedModule
  ]
})
export class BootstrapModule { }
