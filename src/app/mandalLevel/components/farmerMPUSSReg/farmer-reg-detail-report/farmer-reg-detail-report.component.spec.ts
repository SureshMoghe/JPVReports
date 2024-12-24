import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegDetailReportComponent } from './farmer-reg-detail-report.component';

describe('FarmerRegDetailReportComponent', () => {
  let component: FarmerRegDetailReportComponent;
  let fixture: ComponentFixture<FarmerRegDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
