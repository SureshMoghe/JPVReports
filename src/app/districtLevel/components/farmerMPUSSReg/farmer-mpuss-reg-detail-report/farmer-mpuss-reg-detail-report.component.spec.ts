import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegDetailReportComponent } from './farmer-mpuss-reg-detail-report.component';

describe('FarmerMpussRegDetailReportComponent', () => {
  let component: FarmerMpussRegDetailReportComponent;
  let fixture: ComponentFixture<FarmerMpussRegDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
