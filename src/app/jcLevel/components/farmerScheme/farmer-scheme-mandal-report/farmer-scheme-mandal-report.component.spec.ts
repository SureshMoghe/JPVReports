import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeMandalReportComponent } from './farmer-scheme-mandal-report.component';

describe('FarmerSchemeMandalReportComponent', () => {
  let component: FarmerSchemeMandalReportComponent;
  let fixture: ComponentFixture<FarmerSchemeMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
