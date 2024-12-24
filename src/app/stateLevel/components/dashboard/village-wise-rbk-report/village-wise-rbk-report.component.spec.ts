import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseRbkReportComponent } from './village-wise-rbk-report.component';

describe('VillageWiseRbkReportComponent', () => {
  let component: VillageWiseRbkReportComponent;
  let fixture: ComponentFixture<VillageWiseRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
