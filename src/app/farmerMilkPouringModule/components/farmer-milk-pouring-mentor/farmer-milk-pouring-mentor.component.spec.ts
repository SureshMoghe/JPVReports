import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringMentorComponent } from './farmer-milk-pouring-mentor.component';

describe('FarmerMilkPouringMentorComponent', () => {
  let component: FarmerMilkPouringMentorComponent;
  let fixture: ComponentFixture<FarmerMilkPouringMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
