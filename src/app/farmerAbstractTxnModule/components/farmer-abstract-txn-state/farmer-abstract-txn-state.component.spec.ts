import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnStateComponent } from './farmer-abstract-txn-state.component';

describe('FarmerAbstractTxnStateComponent', () => {
  let component: FarmerAbstractTxnStateComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
