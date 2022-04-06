import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './pages/main-page.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.dev';
import { CRAWLER_API, ENTITY_NAME } from './constants/token';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MainPageModule
  ]
})
export class CoreModule { }
