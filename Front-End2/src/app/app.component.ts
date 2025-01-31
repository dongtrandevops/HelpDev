import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    RatingModule,
    TableModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front-End2';
  value: any;
  products: any[] = [{
    code:'1',
    name:'sdfsdf1'
  }];
}
