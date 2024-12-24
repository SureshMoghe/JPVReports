import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRouteWiseComponent } from './vv-farmer-data-route-wise.component';

describe('VvFarmerDataRouteWiseComponent', () => {
  let component: VvFarmerDataRouteWiseComponent;
  let fixture: ComponentFixture<VvFarmerDataRouteWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRouteWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRouteWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
