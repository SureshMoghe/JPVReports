import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseDistrictComponent } from './ldm-bank-wise-district.component';

describe('LdmBankWiseDistrictComponent', () => {
  let component: LdmBankWiseDistrictComponent;
  let fixture: ComponentFixture<LdmBankWiseDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
