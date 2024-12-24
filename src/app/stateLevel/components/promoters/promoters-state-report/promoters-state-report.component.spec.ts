import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersStateReportComponent } from './promoters-state-report.component';

describe('PromotersStateReportComponent', () => {
  let component: PromotersStateReportComponent;
  let fixture: ComponentFixture<PromotersStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
