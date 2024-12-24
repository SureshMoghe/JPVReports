import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWiseStateComponent } from './ldm-bank-wise-state.component';

describe('LdmBankWiseStateComponent', () => {
  let component: LdmBankWiseStateComponent;
  let fixture: ComponentFixture<LdmBankWiseStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWiseStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWiseStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
