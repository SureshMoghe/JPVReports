import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerwiseReportComponent } from './farmerwise-report.component';

describe('FarmerwiseReportComponent', () => {
  let component: FarmerwiseReportComponent;
  let fixture: ComponentFixture<FarmerwiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerwiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerwiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
