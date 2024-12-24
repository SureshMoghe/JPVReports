import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseMandalGridReportComponent } from './village-wise-mandal-grid-report.component';

describe('VillageWiseMandalGridReportComponent', () => {
  let component: VillageWiseMandalGridReportComponent;
  let fixture: ComponentFixture<VillageWiseMandalGridReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseMandalGridReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseMandalGridReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
