import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacBankAccMentorComponent } from './mdac-bank-acc-mentor.component';

describe('MdacBankAccMentorComponent', () => {
  let component: MdacBankAccMentorComponent;
  let fixture: ComponentFixture<MdacBankAccMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacBankAccMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacBankAccMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
