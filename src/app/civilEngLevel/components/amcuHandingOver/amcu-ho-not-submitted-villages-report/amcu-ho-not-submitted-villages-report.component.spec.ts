import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHoNotSubmittedVillagesReportComponent } from './amcu-ho-not-submitted-villages-report.component';

describe('AmcuHoNotSubmittedVillagesReportComponent', () => {
  let component: AmcuHoNotSubmittedVillagesReportComponent;
  let fixture: ComponentFixture<AmcuHoNotSubmittedVillagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHoNotSubmittedVillagesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHoNotSubmittedVillagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
