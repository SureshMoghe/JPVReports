import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRbkComponent } from './vv-farmer-data-rbk.component';

describe('VvFarmerDataRbkComponent', () => {
  let component: VvFarmerDataRbkComponent;
  let fixture: ComponentFixture<VvFarmerDataRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
