import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverStateComponent } from './amcu-handing-over-state.component';

describe('AmcuHandingOverStateComponent', () => {
  let component: AmcuHandingOverStateComponent;
  let fixture: ComponentFixture<AmcuHandingOverStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
