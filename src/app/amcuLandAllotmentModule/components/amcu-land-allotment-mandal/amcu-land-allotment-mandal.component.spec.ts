import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentMandalComponent } from './amcu-land-allotment-mandal.component';

describe('AmcuLandAllotmentMandalComponent', () => {
  let component: AmcuLandAllotmentMandalComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
