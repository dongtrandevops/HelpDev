import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRxjsComponent } from './form-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: FormRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRxjsRoutingModule { }
