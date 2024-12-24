import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseVillageReportComponent } from './dist-wise-village-report.component';

describe('DistWiseVillageReportComponent', () => {
  let component: DistWiseVillageReportComponent;
  let fixture: ComponentFixture<DistWiseVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
