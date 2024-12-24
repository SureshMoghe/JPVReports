import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacSocietyWiseReportComponent } from './mdac-society-wise-report.component';

describe('MdacSocietyWiseReportComponent', () => {
  let component: MdacSocietyWiseReportComponent;
  let fixture: ComponentFixture<MdacSocietyWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacSocietyWiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacSocietyWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
