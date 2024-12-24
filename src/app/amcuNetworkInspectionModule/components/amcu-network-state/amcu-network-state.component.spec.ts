import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNetworkStateComponent } from './amcu-network-state.component';

describe('AmcuNetworkStateComponent', () => {
  let component: AmcuNetworkStateComponent;
  let fixture: ComponentFixture<AmcuNetworkStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNetworkStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNetworkStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
