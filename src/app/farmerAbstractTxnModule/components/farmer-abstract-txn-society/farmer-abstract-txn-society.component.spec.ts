import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnSocietyComponent } from './farmer-abstract-txn-society.component';

describe('FarmerAbstractTxnSocietyComponent', () => {
  let component: FarmerAbstractTxnSocietyComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
