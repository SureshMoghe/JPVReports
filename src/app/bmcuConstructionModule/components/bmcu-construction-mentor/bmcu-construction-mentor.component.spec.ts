import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionMentorComponent } from './bmcu-construction-mentor.component';

describe('BmcuConstructionMentorComponent', () => {
  let component: BmcuConstructionMentorComponent;
  let fixture: ComponentFixture<BmcuConstructionMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
