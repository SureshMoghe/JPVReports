import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverStateReportComponent } from './amcu-handing-over-state-report.component';

describe('AmcuHandingOverStateReportComponent', () => {
  let component: AmcuHandingOverStateReportComponent;
  let fixture: ComponentFixture<AmcuHandingOverStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
