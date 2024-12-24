import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBKNoOfWomenFarmerMilkPouringGridListComponent } from './rbkno-of-women-farmer-milk-pouring-grid-list.component';

describe('RBKNoOfWomenFarmerMilkPouringGridListComponent', () => {
  let component: RBKNoOfWomenFarmerMilkPouringGridListComponent;
  let fixture: ComponentFixture<RBKNoOfWomenFarmerMilkPouringGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBKNoOfWomenFarmerMilkPouringGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBKNoOfWomenFarmerMilkPouringGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
