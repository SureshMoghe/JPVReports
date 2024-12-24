import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataVillageComponent } from './vv-farmer-data-village.component';

describe('VvFarmerDataVillageComponent', () => {
  let component: VvFarmerDataVillageComponent;
  let fixture: ComponentFixture<VvFarmerDataVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
