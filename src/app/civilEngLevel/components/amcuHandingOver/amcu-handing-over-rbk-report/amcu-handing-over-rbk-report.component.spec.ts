import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverRbkReportComponent } from './amcu-handing-over-rbk-report.component';

describe('AmcuHandingOverRbkReportComponent', () => {
  let component: AmcuHandingOverRbkReportComponent;
  let fixture: ComponentFixture<AmcuHandingOverRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
