import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionDetailComponent } from './building-inspection-detail.component';

describe('BuildingInspectionDetailComponent', () => {
  let component: BuildingInspectionDetailComponent;
  let fixture: ComponentFixture<BuildingInspectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
