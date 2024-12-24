import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebanklinkcountComponent } from './statebanklinkcount.component';

describe('StatebanklinkcountComponent', () => {
  let component: StatebanklinkcountComponent;
  let fixture: ComponentFixture<StatebanklinkcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatebanklinkcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebanklinkcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
