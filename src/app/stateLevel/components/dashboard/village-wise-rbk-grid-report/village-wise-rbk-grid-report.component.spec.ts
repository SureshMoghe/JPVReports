import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseRbkGridReportComponent } from './village-wise-rbk-grid-report.component';

describe('VillageWiseRbkGridReportComponent', () => {
  let component: VillageWiseRbkGridReportComponent;
  let fixture: ComponentFixture<VillageWiseRbkGridReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseRbkGridReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseRbkGridReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
