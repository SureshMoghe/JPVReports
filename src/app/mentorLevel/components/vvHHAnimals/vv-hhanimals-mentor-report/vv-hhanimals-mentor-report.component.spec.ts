import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsMentorReportComponent } from './vv-hhanimals-mentor-report.component';

describe('VvHHAnimalsMentorReportComponent', () => {
  let component: VvHHAnimalsMentorReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
