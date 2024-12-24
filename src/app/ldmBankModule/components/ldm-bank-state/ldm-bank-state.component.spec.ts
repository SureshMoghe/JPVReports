import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankStateComponent } from './ldm-bank-state.component';

describe('LdmBankStateComponent', () => {
  let component: LdmBankStateComponent;
  let fixture: ComponentFixture<LdmBankStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
