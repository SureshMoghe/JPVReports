import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankWisePendingComponent } from './ldm-bank-wise-pending.component';

describe('LdmBankWisePendingComponent', () => {
  let component: LdmBankWisePendingComponent;
  let fixture: ComponentFixture<LdmBankWisePendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankWisePendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankWisePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
