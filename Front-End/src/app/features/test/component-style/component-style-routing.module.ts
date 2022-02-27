import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentStyleParentComponent } from './component-style-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentStyleParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStyleRoutingModule { }
