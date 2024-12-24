import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalMandalComponent } from './farmer-approval-mandal.component';

describe('FarmerApprovalMandalComponent', () => {
  let component: FarmerApprovalMandalComponent;
  let fixture: ComponentFixture<FarmerApprovalMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
