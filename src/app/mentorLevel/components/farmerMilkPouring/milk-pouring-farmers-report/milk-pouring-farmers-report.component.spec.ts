import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkPouringFarmersReportComponent } from './milk-pouring-farmers-report.component';

describe('MilkPouringFarmersReportComponent', () => {
  let component: MilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<MilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
