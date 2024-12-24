import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalNoOfWomenFarmerMilkPouringGridListComponent } from './mandal-no-of-women-farmer-milk-pouring-grid-list.component';

describe('MandalNoOfWomenFarmerMilkPouringGridListComponent', () => {
  let component: MandalNoOfWomenFarmerMilkPouringGridListComponent;
  let fixture: ComponentFixture<MandalNoOfWomenFarmerMilkPouringGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandalNoOfWomenFarmerMilkPouringGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalNoOfWomenFarmerMilkPouringGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
