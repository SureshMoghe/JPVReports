import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankPendingReportComponent } from './cheyutha-bank-pending-report.component';

describe('CheyuthaBankPendingReportComponent', () => {
  let component: CheyuthaBankPendingReportComponent;
  let fixture: ComponentFixture<CheyuthaBankPendingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankPendingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankPendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
