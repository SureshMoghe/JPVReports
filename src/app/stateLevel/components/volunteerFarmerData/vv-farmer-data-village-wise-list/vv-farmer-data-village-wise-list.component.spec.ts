import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataVillageWiseListComponent } from './vv-farmer-data-village-wise-list.component';

describe('VvFarmerDataVillageWiseListComponent', () => {
  let component: VvFarmerDataVillageWiseListComponent;
  let fixture: ComponentFixture<VvFarmerDataVillageWiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataVillageWiseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataVillageWiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
