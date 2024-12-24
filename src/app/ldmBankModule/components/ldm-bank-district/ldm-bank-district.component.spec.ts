import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankDistrictComponent } from './ldm-bank-district.component';

describe('LdmBankDistrictComponent', () => {
  let component: LdmBankDistrictComponent;
  let fixture: ComponentFixture<LdmBankDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
