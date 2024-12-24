import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegRbkReportComponent } from './farmer-mpuss-reg-rbk-report.component';

describe('FarmerMpussRegRbkReportComponent', () => {
  let component: FarmerMpussRegRbkReportComponent;
  let fixture: ComponentFixture<FarmerMpussRegRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
