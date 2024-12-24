import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersRbkReportComponent } from './promoters-rbk-report.component';

describe('PromotersRbkReportComponent', () => {
  let component: PromotersRbkReportComponent;
  let fixture: ComponentFixture<PromotersRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
