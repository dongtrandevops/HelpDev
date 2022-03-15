import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResponsiveComponent } from './test-responsive.component';

describe('TestResponsiveComponent', () => {
  let component: TestResponsiveComponent;
  let fixture: ComponentFixture<TestResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
