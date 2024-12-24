import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegRbkReportComponent } from './farmer-reg-rbk-report.component';

describe('FarmerRegRbkReportComponent', () => {
  let component: FarmerRegRbkReportComponent;
  let fixture: ComponentFixture<FarmerRegRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
