import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacVSsapStateReportComponent } from './mdac-vssap-state-report.component';

describe('MdacVSsapStateReportComponent', () => {
  let component: MdacVSsapStateReportComponent;
  let fixture: ComponentFixture<MdacVSsapStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacVSsapStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacVSsapStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
