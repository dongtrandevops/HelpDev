import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateUrlComponent } from './calculate-url.component';

const routes: Routes = [
  {
    path: '',
    component: CalculateUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculateUrlRoutingModule { }
