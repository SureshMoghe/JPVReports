import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentDistrictComponent } from './amcu-land-allotment-district.component';

describe('AmcuLandAllotmentDistrictComponent', () => {
  let component: AmcuLandAllotmentDistrictComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
