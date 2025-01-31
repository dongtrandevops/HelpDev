import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzGridModule
  ]
})
export class SharedModule { }
