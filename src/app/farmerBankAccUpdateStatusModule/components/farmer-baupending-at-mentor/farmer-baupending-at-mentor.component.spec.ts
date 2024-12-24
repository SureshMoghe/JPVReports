import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUPendingAtMentorComponent } from './farmer-baupending-at-mentor.component';

describe('FarmerBAUPendingAtMentorComponent', () => {
  let component: FarmerBAUPendingAtMentorComponent;
  let fixture: ComponentFixture<FarmerBAUPendingAtMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUPendingAtMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUPendingAtMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
