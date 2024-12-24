import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankAcceptedReportComponent } from './cheyutha-bank-accepted-report.component';

describe('CheyuthaBankAcceptedReportComponent', () => {
  let component: CheyuthaBankAcceptedReportComponent;
  let fixture: ComponentFixture<CheyuthaBankAcceptedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankAcceptedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankAcceptedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
