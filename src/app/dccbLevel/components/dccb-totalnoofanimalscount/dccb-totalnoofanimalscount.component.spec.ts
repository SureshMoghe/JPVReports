import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbTotalnoofanimalscountComponent } from './dccb-totalnoofanimalscount.component';

describe('DccbTotalnoofanimalscountComponent', () => {
  let component: DccbTotalnoofanimalscountComponent;
  let fixture: ComponentFixture<DccbTotalnoofanimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbTotalnoofanimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbTotalnoofanimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
