import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentsStatusReportComponent } from './bmcu-equipments-status-report.component';

describe('BmcuEquipmentsStatusReportComponent', () => {
  let component: BmcuEquipmentsStatusReportComponent;
  let fixture: ComponentFixture<BmcuEquipmentsStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentsStatusReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentsStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
