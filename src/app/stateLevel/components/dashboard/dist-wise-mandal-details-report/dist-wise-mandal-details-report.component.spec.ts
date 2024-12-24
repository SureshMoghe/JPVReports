import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseMandalDetailsReportComponent } from './dist-wise-mandal-details-report.component';

describe('DistWiseMandalDetailsReportComponent', () => {
  let component: DistWiseMandalDetailsReportComponent;
  let fixture: ComponentFixture<DistWiseMandalDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseMandalDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseMandalDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
