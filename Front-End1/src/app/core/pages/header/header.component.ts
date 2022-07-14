import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'hd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() $toggleEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.$toggleEvent.emit();
    environment.theme.appearanceFormField = environment.theme.appearanceFormField === 'outline' ? 'fill' : 'outline';
  }
}
