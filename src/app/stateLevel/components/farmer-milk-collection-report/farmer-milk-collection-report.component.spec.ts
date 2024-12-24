import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkCollectionReportComponent } from './farmer-milk-collection-report.component';

describe('FarmerMilkCollectionReportComponent', () => {
  let component: FarmerMilkCollectionReportComponent;
  let fixture: ComponentFixture<FarmerMilkCollectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkCollectionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkCollectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
