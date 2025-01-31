import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingWebsiteRoutingModule } from './setting-website-routing.module';
import { SettingWebsiteComponent } from './setting-website.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SettingWebsiteComponent
  ],
  imports: [
    CommonModule,
    SettingWebsiteRoutingModule,
    SharedModule
  ]
})
export class SettingWebsiteModule { }
