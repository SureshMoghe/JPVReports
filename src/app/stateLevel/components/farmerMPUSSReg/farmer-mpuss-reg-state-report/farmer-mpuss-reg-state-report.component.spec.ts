import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegStateReportComponent } from './farmer-mpuss-reg-state-report.component';

describe('FarmerMpussRegStateReportComponent', () => {
  let component: FarmerMpussRegStateReportComponent;
  let fixture: ComponentFixture<FarmerMpussRegStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
