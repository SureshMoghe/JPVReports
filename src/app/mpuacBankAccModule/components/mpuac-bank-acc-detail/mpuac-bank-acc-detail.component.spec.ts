import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccDetailComponent } from './mpuac-bank-acc-detail.component';

describe('MpuacBankAccDetailComponent', () => {
  let component: MpuacBankAccDetailComponent;
  let fixture: ComponentFixture<MpuacBankAccDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
