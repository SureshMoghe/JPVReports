import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationMentorComponent } from './farmer-registration-mentor.component';

describe('FarmerRegistrationMentorComponent', () => {
  let component: FarmerRegistrationMentorComponent;
  let fixture: ComponentFixture<FarmerRegistrationMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
