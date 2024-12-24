import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseMandalReportComponent } from './village-wise-mandal-report.component';

describe('VillageWiseMandalReportComponent', () => {
  let component: VillageWiseMandalReportComponent;
  let fixture: ComponentFixture<VillageWiseMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
