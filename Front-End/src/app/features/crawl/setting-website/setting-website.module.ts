import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingWebsiteRoutingModule } from './setting-website-routing.module';
import { SettingWebsiteComponent } from './setting-website.component';


@NgModule({
  declarations: [
    SettingWebsiteComponent
  ],
  imports: [
    CommonModule,
    SettingWebsiteRoutingModule
  ]
})
export class SettingWebsiteModule { }
