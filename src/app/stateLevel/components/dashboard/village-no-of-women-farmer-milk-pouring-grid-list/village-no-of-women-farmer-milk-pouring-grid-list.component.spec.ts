import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageNoOfWomenFarmerMilkPouringGridListComponent } from './village-no-of-women-farmer-milk-pouring-grid-list.component';

describe('VillageNoOfWomenFarmerMilkPouringGridListComponent', () => {
  let component: VillageNoOfWomenFarmerMilkPouringGridListComponent;
  let fixture: ComponentFixture<VillageNoOfWomenFarmerMilkPouringGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageNoOfWomenFarmerMilkPouringGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageNoOfWomenFarmerMilkPouringGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
