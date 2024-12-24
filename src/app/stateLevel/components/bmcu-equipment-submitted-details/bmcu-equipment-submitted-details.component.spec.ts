import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentSubmittedDetailsComponent } from './bmcu-equipment-submitted-details.component';

describe('BmcuEquipmentSubmittedDetailsComponent', () => {
  let component: BmcuEquipmentSubmittedDetailsComponent;
  let fixture: ComponentFixture<BmcuEquipmentSubmittedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentSubmittedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentSubmittedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
