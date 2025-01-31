import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHisroryComponent } from './trading-hisrory.component';

describe('TradingHisroryComponent', () => {
  let component: TradingHisroryComponent;
  let fixture: ComponentFixture<TradingHisroryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingHisroryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingHisroryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
