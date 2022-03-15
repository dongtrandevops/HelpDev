import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'hd-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit,AfterViewInit {
  @ViewChild("mainForm") mainForm: NgForm;
  person: any = {};
  $onFilterEmail: Subject<any> = new Subject<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.$onFilterEmail
    .pipe(
      debounceTime(500)
    )
    .subscribe(
      c => {
        if (this.person.email === "222" || this.person.email === "2222") {
          this.mainForm.form.controls['email'].setErrors({ invalid: true })
        } else {
          this.mainForm.form.controls['email'].setErrors(null)
        }
      }
    )
  }
}
