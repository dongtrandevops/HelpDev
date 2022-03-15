import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChangeDetectionComponent } from './child-change-detection.component';

describe('ChildChangeDetectionComponent', () => {
  let component: ChildChangeDetectionComponent;
  let fixture: ComponentFixture<ChildChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildChangeDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
