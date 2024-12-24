import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingPromotersReportComponent } from './villagemeeting-promoters-report.component';

describe('VillagemeetingPromotersReportComponent', () => {
  let component: VillagemeetingPromotersReportComponent;
  let fixture: ComponentFixture<VillagemeetingPromotersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingPromotersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingPromotersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
