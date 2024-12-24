import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeMentorComponent } from './farmer-scheme-mentor.component';

describe('FarmerSchemeMentorComponent', () => {
  let component: FarmerSchemeMentorComponent;
  let fixture: ComponentFixture<FarmerSchemeMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
