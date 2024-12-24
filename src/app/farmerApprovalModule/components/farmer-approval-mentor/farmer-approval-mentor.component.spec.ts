import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalMentorComponent } from './farmer-approval-mentor.component';

describe('FarmerApprovalMentorComponent', () => {
  let component: FarmerApprovalMentorComponent;
  let fixture: ComponentFixture<FarmerApprovalMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
