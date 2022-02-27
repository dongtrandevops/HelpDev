import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleParentComponent } from './component-style-parent.component';

describe('ComponentStyleParentComponent', () => {
  let component: ComponentStyleParentComponent;
  let fixture: ComponentFixture<ComponentStyleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStyleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStyleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
