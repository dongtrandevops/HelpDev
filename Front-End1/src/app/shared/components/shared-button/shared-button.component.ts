import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/core/enums/ui.enum';

@Component({
  selector: 'hd-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {
  @Input() text: string
  @Input() isLoading: boolean
  @Input() type: ButtonType

  constructor() { }

  ngOnInit(): void {
  }

}
