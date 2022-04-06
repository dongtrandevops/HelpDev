import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootUrlComponent } from './root-url.component';

const routes: Routes = [
  {
    path: '',
    component: RootUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootUrlRoutingModule { }
