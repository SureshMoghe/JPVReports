import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringMandalComponent } from './farmer-milk-pouring-mandal.component';

describe('FarmerMilkPouringMandalComponent', () => {
  let component: FarmerMilkPouringMandalComponent;
  let fixture: ComponentFixture<FarmerMilkPouringMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
