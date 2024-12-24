import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankDistrictLoginComponent } from './farmer-nature-of-unit-bank-district-login.component';

describe('FarmerNatureOfUnitBankDistrictLoginComponent', () => {
  let component: FarmerNatureOfUnitBankDistrictLoginComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankDistrictLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankDistrictLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankDistrictLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
