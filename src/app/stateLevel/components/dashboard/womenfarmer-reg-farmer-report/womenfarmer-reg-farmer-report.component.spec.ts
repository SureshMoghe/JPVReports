import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegFarmerReportComponent } from './womenfarmer-reg-farmer-report.component';

describe('WomenfarmerRegFarmerReportComponent', () => {
  let component: WomenfarmerRegFarmerReportComponent;
  let fixture: ComponentFixture<WomenfarmerRegFarmerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegFarmerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegFarmerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
