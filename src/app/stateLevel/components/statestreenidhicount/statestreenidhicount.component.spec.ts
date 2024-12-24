import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestreenidhicountComponent } from './statestreenidhicount.component';

describe('StatestreenidhicountComponent', () => {
  let component: StatestreenidhicountComponent;
  let fixture: ComponentFixture<StatestreenidhicountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatestreenidhicountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatestreenidhicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
