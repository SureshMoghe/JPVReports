import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatejpvRegFarfacilitatedwithanimalgroundingcountComponent } from './statejpv-reg-farfacilitatedwithanimalgroundingcount.component';

describe('StatejpvRegFarfacilitatedwithanimalgroundingcountComponent', () => {
  let component: StatejpvRegFarfacilitatedwithanimalgroundingcountComponent;
  let fixture: ComponentFixture<StatejpvRegFarfacilitatedwithanimalgroundingcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatejpvRegFarfacilitatedwithanimalgroundingcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatejpvRegFarfacilitatedwithanimalgroundingcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
