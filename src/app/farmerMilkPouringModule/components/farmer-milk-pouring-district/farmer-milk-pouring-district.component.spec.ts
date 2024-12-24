import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringDistrictComponent } from './farmer-milk-pouring-district.component';

describe('FarmerMilkPouringDistrictComponent', () => {
  let component: FarmerMilkPouringDistrictComponent;
  let fixture: ComponentFixture<FarmerMilkPouringDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
