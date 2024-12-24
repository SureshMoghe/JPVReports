import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccMandalComponent } from './mpuac-bank-acc-mandal.component';

describe('MpuacBankAccMandalComponent', () => {
  let component: MpuacBankAccMandalComponent;
  let fixture: ComponentFixture<MpuacBankAccMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
