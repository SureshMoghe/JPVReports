import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankStateLevelComponent } from './cheyutha-bank-state-level.component';

describe('CheyuthaBankStateLevelComponent', () => {
  let component: CheyuthaBankStateLevelComponent;
  let fixture: ComponentFixture<CheyuthaBankStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
