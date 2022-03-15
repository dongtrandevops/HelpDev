import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderTableComponent } from './render-table.component';

const routes: Routes = [
  {
    path: '',
    component: RenderTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderTableRoutingModule { }
