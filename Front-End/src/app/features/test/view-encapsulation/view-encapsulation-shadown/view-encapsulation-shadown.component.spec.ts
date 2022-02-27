import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationShadownComponent } from './view-encapsulation-shadown.component';

describe('ViewEncapsulationShadownComponent', () => {
  let component: ViewEncapsulationShadownComponent;
  let fixture: ComponentFixture<ViewEncapsulationShadownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationShadownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationShadownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
