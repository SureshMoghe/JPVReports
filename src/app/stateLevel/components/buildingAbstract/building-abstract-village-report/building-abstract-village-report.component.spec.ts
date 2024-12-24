import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractVillageReportComponent } from './building-abstract-village-report.component';

describe('BuildingAbstractVillageReportComponent', () => {
  let component: BuildingAbstractVillageReportComponent;
  let fixture: ComponentFixture<BuildingAbstractVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
