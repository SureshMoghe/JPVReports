import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationDetailReportComponent } from './farmer-registration-detail-report.component';

describe('FarmerRegistrationDetailReportComponent', () => {
  let component: FarmerRegistrationDetailReportComponent;
  let fixture: ComponentFixture<FarmerRegistrationDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
