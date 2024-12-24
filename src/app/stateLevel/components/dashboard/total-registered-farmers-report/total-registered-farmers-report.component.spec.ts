import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRegisteredFarmersReportComponent } from './total-registered-farmers-report.component';

describe('TotalRegisteredFarmersReportComponent', () => {
  let component: TotalRegisteredFarmersReportComponent;
  let fixture: ComponentFixture<TotalRegisteredFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRegisteredFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRegisteredFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
