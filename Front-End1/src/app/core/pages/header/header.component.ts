import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  }
}
