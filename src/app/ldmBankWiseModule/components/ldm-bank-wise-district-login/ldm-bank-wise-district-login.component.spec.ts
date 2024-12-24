import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseDistrictLoginComponent } from './ldm-bank-wise-district-login.component';

describe('LdmBankWiseDistrictLoginComponent', () => {
  let component: LdmBankWiseDistrictLoginComponent;
  let fixture: ComponentFixture<LdmBankWiseDistrictLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseDistrictLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseDistrictLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
