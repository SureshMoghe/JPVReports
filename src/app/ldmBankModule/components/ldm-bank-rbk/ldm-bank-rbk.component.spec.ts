import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankRbkComponent } from './ldm-bank-rbk.component';

describe('LdmBankRbkComponent', () => {
  let component: LdmBankRbkComponent;
  let fixture: ComponentFixture<LdmBankRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
