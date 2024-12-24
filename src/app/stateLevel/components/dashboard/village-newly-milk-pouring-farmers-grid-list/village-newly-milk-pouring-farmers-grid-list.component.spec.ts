import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageNewlyMilkPouringFarmersGridListComponent } from './village-newly-milk-pouring-farmers-grid-list.component';

describe('VillageNewlyMilkPouringFarmersGridListComponent', () => {
  let component: VillageNewlyMilkPouringFarmersGridListComponent;
  let fixture: ComponentFixture<VillageNewlyMilkPouringFarmersGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageNewlyMilkPouringFarmersGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageNewlyMilkPouringFarmersGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
