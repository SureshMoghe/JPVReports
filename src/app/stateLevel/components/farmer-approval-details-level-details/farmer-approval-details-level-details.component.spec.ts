import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalDetailsLevelDetailsComponent } from './farmer-approval-details-level-details.component';

describe('FarmerApprovalDetailsLevelDetailsComponent', () => {
  let component: FarmerApprovalDetailsLevelDetailsComponent;
  let fixture: ComponentFixture<FarmerApprovalDetailsLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalDetailsLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalDetailsLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
