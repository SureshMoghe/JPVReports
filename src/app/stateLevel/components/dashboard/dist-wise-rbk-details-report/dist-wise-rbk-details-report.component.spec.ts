import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseRbkDetailsReportComponent } from './dist-wise-rbk-details-report.component';

describe('DistWiseRbkDetailsReportComponent', () => {
  let component: DistWiseRbkDetailsReportComponent;
  let fixture: ComponentFixture<DistWiseRbkDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseRbkDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseRbkDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
