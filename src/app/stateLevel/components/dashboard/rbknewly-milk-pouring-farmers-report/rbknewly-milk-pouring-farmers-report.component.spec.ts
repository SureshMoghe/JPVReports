import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBKNewlyMilkPouringFarmersReportComponent } from './rbknewly-milk-pouring-farmers-report.component';

describe('RBKNewlyMilkPouringFarmersReportComponent', () => {
  let component: RBKNewlyMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<RBKNewlyMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBKNewlyMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBKNewlyMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
