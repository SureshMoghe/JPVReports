import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitStateComponent } from './farmer-nature-of-unit-state.component';

describe('FarmerNatureOfUnitStateComponent', () => {
  let component: FarmerNatureOfUnitStateComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
