import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegFarmerDetailsComponent } from './womenfarmer-reg-farmer-details.component';

describe('WomenfarmerRegFarmerDetailsComponent', () => {
  let component: WomenfarmerRegFarmerDetailsComponent;
  let fixture: ComponentFixture<WomenfarmerRegFarmerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegFarmerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegFarmerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
