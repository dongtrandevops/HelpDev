import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRxjsComponent } from './form-rxjs.component';

describe('FormRxjsComponent', () => {
  let component: FormRxjsComponent;
  let fixture: ComponentFixture<FormRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
