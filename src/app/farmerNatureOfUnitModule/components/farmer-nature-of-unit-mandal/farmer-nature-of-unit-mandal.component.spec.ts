import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitMandalComponent } from './farmer-nature-of-unit-mandal.component';

describe('FarmerNatureOfUnitMandalComponent', () => {
  let component: FarmerNatureOfUnitMandalComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
