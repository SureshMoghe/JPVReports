import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeDistrictComponent } from './farmer-scheme-district.component';

describe('FarmerSchemeDistrictComponent', () => {
  let component: FarmerSchemeDistrictComponent;
  let fixture: ComponentFixture<FarmerSchemeDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
