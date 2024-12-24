import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent } from './dccbjpv-reg-farfacilitatedwithanimalgroundingcount.component';

describe('DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent', () => {
  let component: DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent;
  let fixture: ComponentFixture<DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
