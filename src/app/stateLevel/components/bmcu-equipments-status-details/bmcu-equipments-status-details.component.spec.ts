import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuEquipmentsStatusDetailsComponent } from './bmcu-equipments-status-details.component';

describe('BmcuEquipmentsStatusDetailsComponent', () => {
  let component: BmcuEquipmentsStatusDetailsComponent;
  let fixture: ComponentFixture<BmcuEquipmentsStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuEquipmentsStatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuEquipmentsStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
