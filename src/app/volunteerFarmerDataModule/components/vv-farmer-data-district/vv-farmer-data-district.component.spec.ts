import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataDistrictComponent } from './vv-farmer-data-district.component';

describe('VvFarmerDataDistrictComponent', () => {
  let component: VvFarmerDataDistrictComponent;
  let fixture: ComponentFixture<VvFarmerDataDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
