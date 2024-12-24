import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbCheyuthaBeneficiariesCountComponent } from './dccb-cheyutha-beneficiaries-count.component';

describe('DccbCheyuthaBeneficiariesCountComponent', () => {
  let component: DccbCheyuthaBeneficiariesCountComponent;
  let fixture: ComponentFixture<DccbCheyuthaBeneficiariesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbCheyuthaBeneficiariesCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbCheyuthaBeneficiariesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
