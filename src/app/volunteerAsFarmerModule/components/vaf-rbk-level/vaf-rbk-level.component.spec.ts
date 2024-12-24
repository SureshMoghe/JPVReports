import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafRbkLevelComponent } from './vaf-rbk-level.component';

describe('VafRbkLevelComponent', () => {
  let component: VafRbkLevelComponent;
  let fixture: ComponentFixture<VafRbkLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafRbkLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafRbkLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
