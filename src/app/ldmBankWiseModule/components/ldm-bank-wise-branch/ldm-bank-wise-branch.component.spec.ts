import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseBranchComponent } from './ldm-bank-wise-branch.component';

describe('LdmBankWiseBranchComponent', () => {
  let component: LdmBankWiseBranchComponent;
  let fixture: ComponentFixture<LdmBankWiseBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
