import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseMandalComponent } from './ldm-bank-wise-mandal.component';

describe('LdmBankWiseMandalComponent', () => {
  let component: LdmBankWiseMandalComponent;
  let fixture: ComponentFixture<LdmBankWiseMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
