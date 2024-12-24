import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccRbkComponent } from './mpuac-bank-acc-rbk.component';

describe('MpuacBankAccRbkComponent', () => {
  let component: MpuacBankAccRbkComponent;
  let fixture: ComponentFixture<MpuacBankAccRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
