import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingStateComponent } from './villagemeeting-state.component';

describe('VillagemeetingStateComponent', () => {
  let component: VillagemeetingStateComponent;
  let fixture: ComponentFixture<VillagemeetingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
