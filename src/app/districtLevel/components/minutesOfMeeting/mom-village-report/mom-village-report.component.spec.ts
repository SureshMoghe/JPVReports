import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomVillageReportComponent } from './mom-village-report.component';

describe('MomVillageReportComponent', () => {
  let component: MomVillageReportComponent;
  let fixture: ComponentFixture<MomVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
