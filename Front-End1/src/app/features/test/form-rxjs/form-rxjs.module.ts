import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRxjsRoutingModule } from './form-rxjs-routing.module';
import { FormRxjsComponent } from './form-rxjs.component';
import { MaterialModule } from 'src/app/shared/libraries/material.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    FormRxjsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormRxjsRoutingModule,
    MaterialModule
  ]
})
export class FormRxjsModule { }
