import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingMentorComponent } from './villagemeeting-mentor.component';

describe('VillagemeetingMentorComponent', () => {
  let component: VillagemeetingMentorComponent;
  let fixture: ComponentFixture<VillagemeetingMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
