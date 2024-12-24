import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalDistrictComponent } from './farmer-approval-district.component';

describe('FarmerApprovalDistrictComponent', () => {
  let component: FarmerApprovalDistrictComponent;
  let fixture: ComponentFixture<FarmerApprovalDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
