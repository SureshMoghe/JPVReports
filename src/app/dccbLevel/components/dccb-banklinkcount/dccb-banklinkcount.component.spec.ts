import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbBanklinkcountComponent } from './dccb-banklinkcount.component';

describe('DccbBanklinkcountComponent', () => {
  let component: DccbBanklinkcountComponent;
  let fixture: ComponentFixture<DccbBanklinkcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbBanklinkcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbBanklinkcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
