import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomMentorComponent } from './mom-mentor.component';

describe('MomMentorComponent', () => {
  let component: MomMentorComponent;
  let fixture: ComponentFixture<MomMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
