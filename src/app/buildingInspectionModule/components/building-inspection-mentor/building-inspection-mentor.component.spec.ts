import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionMentorComponent } from './building-inspection-mentor.component';

describe('BuildingInspectionMentorComponent', () => {
  let component: BuildingInspectionMentorComponent;
  let fixture: ComponentFixture<BuildingInspectionMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
