import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestResponsiveComponent } from './test-responsive.component';

const routes: Routes = [
  {
    path: '',
    component: TestResponsiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestResponsiveRoutingModule { }
