import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProcurementDistrictComponent } from './milk-procurement-district.component';

describe('MilkProcurementDistrictComponent', () => {
  let component: MilkProcurementDistrictComponent;
  let fixture: ComponentFixture<MilkProcurementDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkProcurementDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkProcurementDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
