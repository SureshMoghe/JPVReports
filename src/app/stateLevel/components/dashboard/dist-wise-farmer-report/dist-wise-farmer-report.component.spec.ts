import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseFarmerReportComponent } from './dist-wise-farmer-report.component';

describe('DistWiseFarmerReportComponent', () => {
  let component: DistWiseFarmerReportComponent;
  let fixture: ComponentFixture<DistWiseFarmerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseFarmerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseFarmerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
