import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssPromotersMilkPouringStatusComponent } from './mdss-promoters-milk-pouring-status.component';

describe('MdssPromotersMilkPouringStatusComponent', () => {
  let component: MdssPromotersMilkPouringStatusComponent;
  let fixture: ComponentFixture<MdssPromotersMilkPouringStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssPromotersMilkPouringStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssPromotersMilkPouringStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
