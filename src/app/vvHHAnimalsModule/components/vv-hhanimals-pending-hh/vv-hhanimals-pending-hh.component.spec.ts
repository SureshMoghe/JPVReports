import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHhanimalsPendingHHComponent } from './vv-hhanimals-pending-hh.component';

describe('VvHhanimalsPendingHHComponent', () => {
  let component: VvHhanimalsPendingHHComponent;
  let fixture: ComponentFixture<VvHhanimalsPendingHHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHhanimalsPendingHHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHhanimalsPendingHHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
