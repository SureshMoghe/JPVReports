import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersVolunteersDistrictReportComponent } from './promoters-volunteers-district-report.component';

describe('PromotersVolunteersDistrictReportComponent', () => {
  let component: PromotersVolunteersDistrictReportComponent;
  let fixture: ComponentFixture<PromotersVolunteersDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersVolunteersDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersVolunteersDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
