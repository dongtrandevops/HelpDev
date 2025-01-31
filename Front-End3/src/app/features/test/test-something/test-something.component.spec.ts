import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSomethingComponent } from './test-something.component';

describe('TestSomethingComponent', () => {
  let component: TestSomethingComponent;
  let fixture: ComponentFixture<TestSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
