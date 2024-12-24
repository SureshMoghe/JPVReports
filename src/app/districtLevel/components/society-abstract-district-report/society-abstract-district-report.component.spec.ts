import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyAbstractDistrictReportComponent } from './society-abstract-district-report.component';

describe('SocietyAbstractDistrictReportComponent', () => {
  let component: SocietyAbstractDistrictReportComponent;
  let fixture: ComponentFixture<SocietyAbstractDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyAbstractDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyAbstractDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
