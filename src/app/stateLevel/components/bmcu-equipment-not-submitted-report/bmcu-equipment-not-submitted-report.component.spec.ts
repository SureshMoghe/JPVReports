import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentNotSubmittedReportComponent } from './bmcu-equipment-not-submitted-report.component';

describe('BmcuEquipmentNotSubmittedReportComponent', () => {
  let component: BmcuEquipmentNotSubmittedReportComponent;
  let fixture: ComponentFixture<BmcuEquipmentNotSubmittedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentNotSubmittedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentNotSubmittedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
