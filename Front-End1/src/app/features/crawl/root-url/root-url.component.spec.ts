import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUrlComponent } from './root-url.component';

describe('RootUrlComponent', () => {
  let component: RootUrlComponent;
  let fixture: ComponentFixture<RootUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
