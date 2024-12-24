import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractRbkReportComponent } from './building-abstract-rbk-report.component';

describe('BuildingAbstractRbkReportComponent', () => {
  let component: BuildingAbstractRbkReportComponent;
  let fixture: ComponentFixture<BuildingAbstractRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
