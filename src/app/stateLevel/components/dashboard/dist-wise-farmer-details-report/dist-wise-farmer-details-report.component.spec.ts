import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseFarmerDetailsReportComponent } from './dist-wise-farmer-details-report.component';

describe('DistWiseFarmerDetailsReportComponent', () => {
  let component: DistWiseFarmerDetailsReportComponent;
  let fixture: ComponentFixture<DistWiseFarmerDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseFarmerDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseFarmerDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
