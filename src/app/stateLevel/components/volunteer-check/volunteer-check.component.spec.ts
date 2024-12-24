import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerCheckComponent } from './volunteer-check.component';

describe('VolunteerCheckComponent', () => {
  let component: VolunteerCheckComponent;
  let fixture: ComponentFixture<VolunteerCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
