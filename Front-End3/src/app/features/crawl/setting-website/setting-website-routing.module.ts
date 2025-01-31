import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingWebsiteComponent } from './setting-website.component';

const routes: Routes = [
  {
    path:'',
    component:SettingWebsiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingWebsiteRoutingModule { }
