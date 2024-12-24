import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseRbkComponent } from './ldm-bank-wise-rbk.component';

describe('LdmBankWiseRbkComponent', () => {
  let component: LdmBankWiseRbkComponent;
  let fixture: ComponentFixture<LdmBankWiseRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
