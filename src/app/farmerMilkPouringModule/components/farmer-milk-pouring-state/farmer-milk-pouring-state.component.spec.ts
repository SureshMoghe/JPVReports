import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringStateComponent } from './farmer-milk-pouring-state.component';

describe('FarmerMilkPouringStateComponent', () => {
  let component: FarmerMilkPouringStateComponent;
  let fixture: ComponentFixture<FarmerMilkPouringStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
