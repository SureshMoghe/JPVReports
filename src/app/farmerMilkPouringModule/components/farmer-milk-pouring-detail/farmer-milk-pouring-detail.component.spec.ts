import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringDetailComponent } from './farmer-milk-pouring-detail.component';

describe('FarmerMilkPouringDetailComponent', () => {
  let component: FarmerMilkPouringDetailComponent;
  let fixture: ComponentFixture<FarmerMilkPouringDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
