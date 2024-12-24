import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalClusterLevelDetailsComponent } from './farmer-approval-cluster-level-details.component';

describe('FarmerApprovalClusterLevelDetailsComponent', () => {
  let component: FarmerApprovalClusterLevelDetailsComponent;
  let fixture: ComponentFixture<FarmerApprovalClusterLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalClusterLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalClusterLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
