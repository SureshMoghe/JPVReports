import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionRbkComponent } from './building-inspection-rbk.component';

describe('BuildingInspectionRbkComponent', () => {
  let component: BuildingInspectionRbkComponent;
  let fixture: ComponentFixture<BuildingInspectionRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
