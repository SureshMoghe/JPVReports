import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmermonitoringdistrictcountComponent } from './farmermonitoringdistrictcount.component';

describe('FarmermonitoringdistrictcountComponent', () => {
  let component: FarmermonitoringdistrictcountComponent;
  let fixture: ComponentFixture<FarmermonitoringdistrictcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmermonitoringdistrictcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmermonitoringdistrictcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
