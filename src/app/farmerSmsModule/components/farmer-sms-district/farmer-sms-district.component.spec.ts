import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsDistrictComponent } from './farmer-sms-district.component';

describe('FarmerSmsDistrictComponent', () => {
  let component: FarmerSmsDistrictComponent;
  let fixture: ComponentFixture<FarmerSmsDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
