import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringStateLevelDetailsComponent } from './session-wise-milk-pouring-state-level-details.component';

describe('SessionWiseMilkPouringStateLevelDetailsComponent', () => {
  let component: SessionWiseMilkPouringStateLevelDetailsComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringStateLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringStateLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringStateLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
