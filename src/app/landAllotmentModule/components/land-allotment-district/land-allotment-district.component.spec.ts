import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentDistrictComponent } from './land-allotment-district.component';

describe('LandAllotmentDistrictComponent', () => {
  let component: LandAllotmentDistrictComponent;
  let fixture: ComponentFixture<LandAllotmentDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
