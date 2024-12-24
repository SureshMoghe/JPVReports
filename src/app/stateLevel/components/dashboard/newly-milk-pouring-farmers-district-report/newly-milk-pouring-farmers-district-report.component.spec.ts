import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyMilkPouringFarmersDistrictReportComponent } from './newly-milk-pouring-farmers-district-report.component';

describe('NewlyMilkPouringFarmersDistrictReportComponent', () => {
  let component: NewlyMilkPouringFarmersDistrictReportComponent;
  let fixture: ComponentFixture<NewlyMilkPouringFarmersDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyMilkPouringFarmersDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyMilkPouringFarmersDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
