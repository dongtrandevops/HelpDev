import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleChildComponent } from './component-style-child.component';

describe('ComponentStyleChildComponent', () => {
  let component: ComponentStyleChildComponent;
  let fixture: ComponentFixture<ComponentStyleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStyleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStyleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
