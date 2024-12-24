import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankPendingComponent } from './cheyutha-bank-pending.component';

describe('CheyuthaBankPendingComponent', () => {
  let component: CheyuthaBankPendingComponent;
  let fixture: ComponentFixture<CheyuthaBankPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
