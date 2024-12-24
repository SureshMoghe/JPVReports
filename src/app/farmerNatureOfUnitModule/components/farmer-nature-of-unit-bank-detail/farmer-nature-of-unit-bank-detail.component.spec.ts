import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankDetailComponent } from './farmer-nature-of-unit-bank-detail.component';

describe('FarmerNatureOfUnitBankDetailComponent', () => {
  let component: FarmerNatureOfUnitBankDetailComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
