import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalVillageLevelDetailsComponent } from './farmer-approval-village-level-details.component';

describe('FarmerApprovalVillageLevelDetailsComponent', () => {
  let component: FarmerApprovalVillageLevelDetailsComponent;
  let fixture: ComponentFixture<FarmerApprovalVillageLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalVillageLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalVillageLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
