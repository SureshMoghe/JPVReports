import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractStateReportComponent } from './building-abstract-state-report.component';

describe('BuildingAbstractStateReportComponent', () => {
  let component: BuildingAbstractStateReportComponent;
  let fixture: ComponentFixture<BuildingAbstractStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
