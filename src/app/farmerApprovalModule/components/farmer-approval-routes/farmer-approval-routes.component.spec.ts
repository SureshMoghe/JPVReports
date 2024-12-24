import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalRoutesComponent } from './farmer-approval-routes.component';

describe('FarmerApprovalRoutesComponent', () => {
  let component: FarmerApprovalRoutesComponent;
  let fixture: ComponentFixture<FarmerApprovalRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
