import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractReportComponent } from './farmer-abstract-report.component';

describe('FarmerAbstractReportComponent', () => {
  let component: FarmerAbstractReportComponent;
  let fixture: ComponentFixture<FarmerAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
