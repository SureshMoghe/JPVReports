import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDistrictComponent } from './farmer-nature-of-unit-district.component';

describe('FarmerNatureOfUnitDistrictComponent', () => {
  let component: FarmerNatureOfUnitDistrictComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
