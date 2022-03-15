import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Categories } from 'src/app/core/constants/dropdown.model';

@Component({
  selector: 'hd-calculate-url',
  templateUrl: './calculate-url.component.html',
  styleUrls: ['./calculate-url.component.scss']
})
export class CalculateUrlComponent implements OnInit {
  categoriesDropdown = Categories;
  categoryControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.categoryControl.hasError('required')) {
      return 'Please select category';
    }
    return null;
  }
}
