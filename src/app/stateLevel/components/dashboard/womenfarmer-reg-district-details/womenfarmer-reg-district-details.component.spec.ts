import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegDistrictDetailsComponent } from './womenfarmer-reg-district-details.component';

describe('WomenfarmerRegDistrictDetailsComponent', () => {
  let component: WomenfarmerRegDistrictDetailsComponent;
  let fixture: ComponentFixture<WomenfarmerRegDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
