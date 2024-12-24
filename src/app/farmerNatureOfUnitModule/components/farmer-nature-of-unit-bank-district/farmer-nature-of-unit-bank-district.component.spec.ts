import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankDistrictComponent } from './farmer-nature-of-unit-bank-district.component';

describe('FarmerNatureOfUnitBankDistrictComponent', () => {
  let component: FarmerNatureOfUnitBankDistrictComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
