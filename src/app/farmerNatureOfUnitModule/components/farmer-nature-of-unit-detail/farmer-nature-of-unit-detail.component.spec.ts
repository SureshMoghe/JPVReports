import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDetailComponent } from './farmer-nature-of-unit-detail.component';

describe('FarmerNatureOfUnitDetailComponent', () => {
  let component: FarmerNatureOfUnitDetailComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
