import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmpMandalReportComponent } from './fmp-mandal-report.component';

describe('FmpMandalReportComponent', () => {
  let component: FmpMandalReportComponent;
  let fixture: ComponentFixture<FmpMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmpMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmpMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
