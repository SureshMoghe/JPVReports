import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpStateLevelComponent } from './cmp-state-level.component';

describe('CmpStateLevelComponent', () => {
  let component: CmpStateLevelComponent;
  let fixture: ComponentFixture<CmpStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
