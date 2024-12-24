import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRouteWiseListComponent } from './vv-farmer-data-route-wise-list.component';

describe('VvFarmerDataRouteWiseListComponent', () => {
  let component: VvFarmerDataRouteWiseListComponent;
  let fixture: ComponentFixture<VvFarmerDataRouteWiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRouteWiseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRouteWiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
