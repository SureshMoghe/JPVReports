import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccStateComponent } from './mpuac-bank-acc-state.component';

describe('MpuacBankAccStateComponent', () => {
  let component: MpuacBankAccStateComponent;
  let fixture: ComponentFixture<MpuacBankAccStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
