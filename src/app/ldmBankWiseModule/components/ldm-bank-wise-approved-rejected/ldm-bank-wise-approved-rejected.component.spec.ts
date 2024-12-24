import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseApprovedRejectedComponent } from './ldm-bank-wise-approved-rejected.component';

describe('LdmBankWiseApprovedRejectedComponent', () => {
  let component: LdmBankWiseApprovedRejectedComponent;
  let fixture: ComponentFixture<LdmBankWiseApprovedRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseApprovedRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseApprovedRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
