import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentsPARComponent } from './bmcu-equipments-par.component';

describe('BmcuEquipmentsPARComponent', () => {
  let component: BmcuEquipmentsPARComponent;
  let fixture: ComponentFixture<BmcuEquipmentsPARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentsPARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentsPARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
