import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentMandalComponent } from './land-allotment-mandal.component';

describe('LandAllotmentMandalComponent', () => {
  let component: LandAllotmentMandalComponent;
  let fixture: ComponentFixture<LandAllotmentMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
