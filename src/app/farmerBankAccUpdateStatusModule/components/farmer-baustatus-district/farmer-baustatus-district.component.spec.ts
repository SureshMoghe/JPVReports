import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUStatusDistrictComponent } from './farmer-baustatus-district.component';

describe('FarmerBAUStatusDistrictComponent', () => {
  let component: FarmerBAUStatusDistrictComponent;
  let fixture: ComponentFixture<FarmerBAUStatusDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUStatusDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUStatusDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
