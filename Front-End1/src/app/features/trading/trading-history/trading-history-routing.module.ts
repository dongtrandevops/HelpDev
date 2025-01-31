import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradingHistoryComponent } from './trading-history.component';

const routes: Routes = [
  {
    path: '',
    component: TradingHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingHistoryRoutingModule { }
