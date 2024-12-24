import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsMentorComponent } from './farmer-sms-mentor.component';

describe('FarmerSmsMentorComponent', () => {
  let component: FarmerSmsMentorComponent;
  let fixture: ComponentFixture<FarmerSmsMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
