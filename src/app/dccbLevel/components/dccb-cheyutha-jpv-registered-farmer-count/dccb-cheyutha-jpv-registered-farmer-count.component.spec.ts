import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbCheyuthaJpvRegisteredFarmerCountComponent } from './dccb-cheyutha-jpv-registered-farmer-count.component';

describe('DccbCheyuthaJpvRegisteredFarmerCountComponent', () => {
  let component: DccbCheyuthaJpvRegisteredFarmerCountComponent;
  let fixture: ComponentFixture<DccbCheyuthaJpvRegisteredFarmerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbCheyuthaJpvRegisteredFarmerCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbCheyuthaJpvRegisteredFarmerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
