import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsStateComponent } from './vv-hhanimals-state.component';

describe('VvHHAnimalsStateComponent', () => {
  let component: VvHHAnimalsStateComponent;
  let fixture: ComponentFixture<VvHHAnimalsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
