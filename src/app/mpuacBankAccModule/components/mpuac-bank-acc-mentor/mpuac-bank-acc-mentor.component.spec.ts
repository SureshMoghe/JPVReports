import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccMentorComponent } from './mpuac-bank-acc-mentor.component';

describe('MpuacBankAccMentorComponent', () => {
  let component: MpuacBankAccMentorComponent;
  let fixture: ComponentFixture<MpuacBankAccMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
