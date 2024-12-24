import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegDistrictComponent } from './farmer-mpuss-reg-district.component';

describe('FarmerMpussRegDistrictComponent', () => {
  let component: FarmerMpussRegDistrictComponent;
  let fixture: ComponentFixture<FarmerMpussRegDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
