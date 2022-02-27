import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateUrlComponent } from './calculate-url.component';

describe('CalculateUrlComponent', () => {
  let component: CalculateUrlComponent;
  let fixture: ComponentFixture<CalculateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
