import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankBranchComponent } from './farmer-nature-of-unit-bank-branch.component';

describe('FarmerNatureOfUnitBankBranchComponent', () => {
  let component: FarmerNatureOfUnitBankBranchComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
