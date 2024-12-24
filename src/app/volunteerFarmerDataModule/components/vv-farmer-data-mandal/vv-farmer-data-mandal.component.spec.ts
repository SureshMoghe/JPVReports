import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataMandalComponent } from './vv-farmer-data-mandal.component';

describe('VvFarmerDataMandalComponent', () => {
  let component: VvFarmerDataMandalComponent;
  let fixture: ComponentFixture<VvFarmerDataMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
