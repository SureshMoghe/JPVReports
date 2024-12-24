import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnDistrictComponent } from './farmer-abstract-txn-district.component';

describe('FarmerAbstractTxnDistrictComponent', () => {
  let component: FarmerAbstractTxnDistrictComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
