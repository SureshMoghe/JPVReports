import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentSubmittedReportComponent } from './bmcu-equipment-submitted-report.component';

describe('BmcuEquipmentSubmittedReportComponent', () => {
  let component: BmcuEquipmentSubmittedReportComponent;
  let fixture: ComponentFixture<BmcuEquipmentSubmittedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentSubmittedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentSubmittedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
