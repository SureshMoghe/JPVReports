import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegDistrictReportsComponent } from './womenfarmer-reg-district-reports.component';

describe('WomenfarmerRegDistrictReportsComponent', () => {
  let component: WomenfarmerRegDistrictReportsComponent;
  let fixture: ComponentFixture<WomenfarmerRegDistrictReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegDistrictReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegDistrictReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
