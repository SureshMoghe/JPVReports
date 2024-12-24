import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringRBKLevelDetailsComponent } from './session-wise-milk-pouring-rbklevel-details.component';

describe('SessionWiseMilkPouringRBKLevelDetailsComponent', () => {
  let component: SessionWiseMilkPouringRBKLevelDetailsComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringRBKLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringRBKLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringRBKLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
