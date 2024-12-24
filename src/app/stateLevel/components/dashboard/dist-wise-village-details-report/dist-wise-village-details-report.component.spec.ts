import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseVillageDetailsReportComponent } from './dist-wise-village-details-report.component';

describe('DistWiseVillageDetailsReportComponent', () => {
  let component: DistWiseVillageDetailsReportComponent;
  let fixture: ComponentFixture<DistWiseVillageDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseVillageDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseVillageDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
