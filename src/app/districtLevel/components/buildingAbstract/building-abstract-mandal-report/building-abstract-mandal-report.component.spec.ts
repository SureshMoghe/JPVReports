import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractMandalReportComponent } from './building-abstract-mandal-report.component';

describe('BuildingAbstractMandalReportComponent', () => {
  let component: BuildingAbstractMandalReportComponent;
  let fixture: ComponentFixture<BuildingAbstractMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
