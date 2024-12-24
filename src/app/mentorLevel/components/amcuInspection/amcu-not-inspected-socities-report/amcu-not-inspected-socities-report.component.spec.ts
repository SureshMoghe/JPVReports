import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNotInspectedSocitiesReportComponent } from './amcu-not-inspected-socities-report.component';

describe('AmcuNotInspectedSocitiesReportComponent', () => {
  let component: AmcuNotInspectedSocitiesReportComponent;
  let fixture: ComponentFixture<AmcuNotInspectedSocitiesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNotInspectedSocitiesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNotInspectedSocitiesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
