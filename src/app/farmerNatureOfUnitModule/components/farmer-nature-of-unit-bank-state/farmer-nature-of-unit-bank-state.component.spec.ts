import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankStateComponent } from './farmer-nature-of-unit-bank-state.component';

describe('FarmerNatureOfUnitBankStateComponent', () => {
  let component: FarmerNatureOfUnitBankStateComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
