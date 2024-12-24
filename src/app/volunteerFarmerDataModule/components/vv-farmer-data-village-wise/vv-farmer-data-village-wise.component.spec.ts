import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataVillageWiseComponent } from './vv-farmer-data-village-wise.component';

describe('VvFarmerDataVillageWiseComponent', () => {
  let component: VvFarmerDataVillageWiseComponent;
  let fixture: ComponentFixture<VvFarmerDataVillageWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataVillageWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataVillageWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
