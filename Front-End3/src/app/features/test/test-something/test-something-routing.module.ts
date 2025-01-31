import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSomethingComponent } from './test-something.component';

const routes: Routes = [{
  path: '',
  component: TestSomethingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSomethingRoutingModule { }
