import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'hd-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  icon: string
  message: string

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.icon = data.icon
    this.message = data.message
  }

  ngOnInit(): void {
  }
}
