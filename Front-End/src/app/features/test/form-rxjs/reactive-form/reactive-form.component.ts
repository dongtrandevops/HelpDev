import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { delay, first, map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'hd-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {
  formGroup = new FormGroup({
    emailFormControl: new FormControl('',
      [
        Validators.required,
        // Validators.email,
        // this.invalidCode()
      ],

      this.invalidCodeAsync()
    ),
  });

  constructor() { }

  ngOnInit(): void {
  }

  // invalidCode(): ValidatorFn {
  //   return (control: AbstractControl) => {
  //     console.log('      control.value ', control.value)
  //     if (control.value !== '222@gmail.com') {
  //       console.log(control.errors)
  //       return { invalidCode: true }
  //     } else {
  //       console.log(control.errors)
  //       return null;
  //     }
  //   }
  // }

  validateEmail(email: string) {
    const isValid = email === 'valid';
    return of(isValid).pipe(delay(1000));
  }

  invalidCodeAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      // if (control.value !== 'valid') {
      //   return of({ invalid: true }).pipe(first())
      // } else {
      //   return of(null).pipe(first())
      // }
      return control.valueChanges.pipe(
        debounceTime(500),
        first(),
        mergeMap(() => this.validateEmail(control.value)
          .pipe(
            map(result => {
              if (result) {
                return null;
              } else {
                return { invalid: true };
              }
            })
          )
        )
      )
    }
  }

  ngAfterViewInit(): void {
  }

}
