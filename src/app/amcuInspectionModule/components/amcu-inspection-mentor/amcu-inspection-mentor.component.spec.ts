import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionMentorComponent } from './amcu-inspection-mentor.component';

describe('AmcuInspectionMentorComponent', () => {
  let component: AmcuInspectionMentorComponent;
  let fixture: ComponentFixture<AmcuInspectionMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
