import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersDetailReportComponent } from './promoters-detail-report.component';

describe('PromotersDetailReportComponent', () => {
  let component: PromotersDetailReportComponent;
  let fixture: ComponentFixture<PromotersDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
