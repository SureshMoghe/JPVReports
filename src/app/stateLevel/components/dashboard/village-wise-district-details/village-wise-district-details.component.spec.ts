import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseDistrictDetailsComponent } from './village-wise-district-details.component';

describe('VillageWiseDistrictDetailsComponent', () => {
  let component: VillageWiseDistrictDetailsComponent;
  let fixture: ComponentFixture<VillageWiseDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
