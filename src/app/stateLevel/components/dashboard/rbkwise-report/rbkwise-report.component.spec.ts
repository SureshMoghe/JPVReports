import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbkwiseReportComponent } from './rbkwise-report.component';

describe('RbkwiseReportComponent', () => {
  let component: RbkwiseReportComponent;
  let fixture: ComponentFixture<RbkwiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbkwiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbkwiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
