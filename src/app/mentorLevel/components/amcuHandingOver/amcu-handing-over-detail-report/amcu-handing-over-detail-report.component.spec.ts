import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverDetailReportComponent } from './amcu-handing-over-detail-report.component';

describe('AmcuHandingOverDetailReportComponent', () => {
  let component: AmcuHandingOverDetailReportComponent;
  let fixture: ComponentFixture<AmcuHandingOverDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
