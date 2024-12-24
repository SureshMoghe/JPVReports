import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringRouteComponent } from './farmer-milk-pouring-route.component';

describe('FarmerMilkPouringRouteComponent', () => {
  let component: FarmerMilkPouringRouteComponent;
  let fixture: ComponentFixture<FarmerMilkPouringRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
