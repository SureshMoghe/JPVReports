import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafStateLevelComponent } from './vaf-state-level.component';

describe('VafStateLevelComponent', () => {
  let component: VafStateLevelComponent;
  let fixture: ComponentFixture<VafStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
