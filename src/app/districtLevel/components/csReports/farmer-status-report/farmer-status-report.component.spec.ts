import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStatusReportComponent } from './farmer-status-report.component';

describe('FarmerStatusReportComponent', () => {
  let component: FarmerStatusReportComponent;
  let fixture: ComponentFixture<FarmerStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerStatusReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
