import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './libraries/material.module';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedNotificationComponent } from './components/shared-notification/shared-notification.component';

@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedNotificationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SharedButtonComponent
  ]
})
export class SharedModule { }
