import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatetotalnoofanimalscountComponent } from './statetotalnoofanimalscount.component';

describe('StatetotalnoofanimalscountComponent', () => {
  let component: StatetotalnoofanimalscountComponent;
  let fixture: ComponentFixture<StatetotalnoofanimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatetotalnoofanimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatetotalnoofanimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
