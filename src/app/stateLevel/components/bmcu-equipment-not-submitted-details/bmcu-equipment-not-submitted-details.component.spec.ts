import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentNotSubmittedDetailsComponent } from './bmcu-equipment-not-submitted-details.component';

describe('BmcuEquipmentNotSubmittedDetailsComponent', () => {
  let component: BmcuEquipmentNotSubmittedDetailsComponent;
  let fixture: ComponentFixture<BmcuEquipmentNotSubmittedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentNotSubmittedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentNotSubmittedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
