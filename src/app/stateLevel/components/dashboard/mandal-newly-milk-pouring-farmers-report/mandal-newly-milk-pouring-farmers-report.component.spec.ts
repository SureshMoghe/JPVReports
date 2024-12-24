import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalNewlyMilkPouringFarmersReportComponent } from './mandal-newly-milk-pouring-farmers-report.component';

describe('MandalNewlyMilkPouringFarmersReportComponent', () => {
  let component: MandalNewlyMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<MandalNewlyMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandalNewlyMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalNewlyMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
