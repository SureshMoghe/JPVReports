import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectedSocitiesReportComponent } from './amcu-inspected-socities-report.component';

describe('AmcuInspectedSocitiesReportComponent', () => {
  let component: AmcuInspectedSocitiesReportComponent;
  let fixture: ComponentFixture<AmcuInspectedSocitiesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectedSocitiesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectedSocitiesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
