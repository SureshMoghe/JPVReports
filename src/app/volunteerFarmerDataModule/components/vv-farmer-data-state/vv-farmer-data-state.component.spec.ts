import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataStateComponent } from './vv-farmer-data-state.component';

describe('VvFarmerDataStateComponent', () => {
  let component: VvFarmerDataStateComponent;
  let fixture: ComponentFixture<VvFarmerDataStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
