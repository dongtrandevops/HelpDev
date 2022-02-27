import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentLifeCycleComponent } from './parent-life-cycle.component';

const routes: Routes = [
  {
    path: '',
    component: ParentLifeCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
