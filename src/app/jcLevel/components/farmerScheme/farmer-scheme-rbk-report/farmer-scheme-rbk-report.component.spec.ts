import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeRbkReportComponent } from './farmer-scheme-rbk-report.component';

describe('FarmerSchemeRbkReportComponent', () => {
  let component: FarmerSchemeRbkReportComponent;
  let fixture: ComponentFixture<FarmerSchemeRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
