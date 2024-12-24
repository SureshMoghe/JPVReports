import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyMilkPouringFarmersDistrictDetailsComponent } from './newly-milk-pouring-farmers-district-details.component';

describe('NewlyMilkPouringFarmersDistrictDetailsComponent', () => {
  let component: NewlyMilkPouringFarmersDistrictDetailsComponent;
  let fixture: ComponentFixture<NewlyMilkPouringFarmersDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyMilkPouringFarmersDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyMilkPouringFarmersDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
