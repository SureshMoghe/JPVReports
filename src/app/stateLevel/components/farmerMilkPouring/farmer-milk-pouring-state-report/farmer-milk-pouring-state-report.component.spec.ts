import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringStateReportComponent } from './farmer-milk-pouring-state-report.component';

describe('FarmerMilkPouringStateReportComponent', () => {
  let component: FarmerMilkPouringStateReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
