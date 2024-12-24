import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeStateReportComponent } from './farmer-scheme-state-report.component';

describe('FarmerSchemeStateReportComponent', () => {
  let component: FarmerSchemeStateReportComponent;
  let fixture: ComponentFixture<FarmerSchemeStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
