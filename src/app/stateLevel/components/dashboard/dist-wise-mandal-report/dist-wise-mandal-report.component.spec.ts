import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseMandalReportComponent } from './dist-wise-mandal-report.component';

describe('DistWiseMandalReportComponent', () => {
  let component: DistWiseMandalReportComponent;
  let fixture: ComponentFixture<DistWiseMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
