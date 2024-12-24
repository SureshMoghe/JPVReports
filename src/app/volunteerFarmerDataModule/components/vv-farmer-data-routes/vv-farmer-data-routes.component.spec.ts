import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRoutesComponent } from './vv-farmer-data-routes.component';

describe('VvFarmerDataRoutesComponent', () => {
  let component: VvFarmerDataRoutesComponent;
  let fixture: ComponentFixture<VvFarmerDataRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
