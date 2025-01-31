import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingHistoryRoutingModule } from './trading-history-routing.module';
import { TradingHistoryComponent } from './trading-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TradingHistoryComponent
  ],
  imports: [
    CommonModule,
    TradingHistoryRoutingModule,
    SharedModule
  ]
})
export class TradingHistoryModule { }
