import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionDistrictComponent } from './amcu-inspection-district.component';

describe('AmcuInspectionDistrictComponent', () => {
  let component: AmcuInspectionDistrictComponent;
  let fixture: ComponentFixture<AmcuInspectionDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
