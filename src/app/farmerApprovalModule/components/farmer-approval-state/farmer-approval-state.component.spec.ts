import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalStateComponent } from './farmer-approval-state.component';

describe('FarmerApprovalStateComponent', () => {
  let component: FarmerApprovalStateComponent;
  let fixture: ComponentFixture<FarmerApprovalStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
