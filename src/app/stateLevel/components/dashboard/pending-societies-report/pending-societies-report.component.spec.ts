import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSocietiesReportComponent } from './pending-societies-report.component';

describe('PendingSocietiesReportComponent', () => {
  let component: PendingSocietiesReportComponent;
  let fixture: ComponentFixture<PendingSocietiesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSocietiesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSocietiesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
