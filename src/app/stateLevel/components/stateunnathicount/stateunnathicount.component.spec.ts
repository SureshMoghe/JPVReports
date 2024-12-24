import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateunnathicountComponent } from './stateunnathicount.component';

describe('StateunnathicountComponent', () => {
  let component: StateunnathicountComponent;
  let fixture: ComponentFixture<StateunnathicountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateunnathicountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateunnathicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
