import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVillageReportComponent } from './pending-village-report.component';

describe('PendingVillageReportComponent', () => {
  let component: PendingVillageReportComponent;
  let fixture: ComponentFixture<PendingVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
