import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnMandalComponent } from './farmer-abstract-txn-mandal.component';

describe('FarmerAbstractTxnMandalComponent', () => {
  let component: FarmerAbstractTxnMandalComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
