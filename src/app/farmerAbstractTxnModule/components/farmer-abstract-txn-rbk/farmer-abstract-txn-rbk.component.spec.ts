import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnRbkComponent } from './farmer-abstract-txn-rbk.component';

describe('FarmerAbstractTxnRbkComponent', () => {
  let component: FarmerAbstractTxnRbkComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
