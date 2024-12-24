import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionStateComponent } from './bmcu-construction-state.component';

describe('BmcuConstructionStateComponent', () => {
  let component: BmcuConstructionStateComponent;
  let fixture: ComponentFixture<BmcuConstructionStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
