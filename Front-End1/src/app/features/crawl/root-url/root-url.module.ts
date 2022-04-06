import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootUrlRoutingModule } from './root-url-routing.module';
import { RootUrlComponent } from './root-url.component';
import { CRAWLER_API, ENTITY_NAME } from 'src/app/core/constants/token';
import { environment } from 'src/environments/environment.dev';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RootUrlComponent
  ],
  imports: [
    CommonModule,
    RootUrlRoutingModule,
    SharedModule
  ]
})
export class RootUrlModule { }
