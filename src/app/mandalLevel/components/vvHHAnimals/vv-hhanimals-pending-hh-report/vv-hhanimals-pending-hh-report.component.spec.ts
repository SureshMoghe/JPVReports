import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHhanimalsPendingHhReportComponent } from './vv-hhanimals-pending-hh-report.component';

describe('VvHhanimalsPendingHhReportComponent', () => {
  let component: VvHhanimalsPendingHhReportComponent;
  let fixture: ComponentFixture<VvHhanimalsPendingHhReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHhanimalsPendingHhReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHhanimalsPendingHhReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
