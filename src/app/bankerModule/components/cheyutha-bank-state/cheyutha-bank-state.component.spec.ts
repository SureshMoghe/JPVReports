import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankStateComponent } from './cheyutha-bank-state.component';

describe('CheyuthaBankStateComponent', () => {
  let component: CheyuthaBankStateComponent;
  let fixture: ComponentFixture<CheyuthaBankStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
