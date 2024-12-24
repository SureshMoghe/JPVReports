import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuPerformanceDistrictComponent } from './amcu-performance-district.component';

describe('AmcuPerformanceDistrictComponent', () => {
  let component: AmcuPerformanceDistrictComponent;
  let fixture: ComponentFixture<AmcuPerformanceDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuPerformanceDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuPerformanceDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
