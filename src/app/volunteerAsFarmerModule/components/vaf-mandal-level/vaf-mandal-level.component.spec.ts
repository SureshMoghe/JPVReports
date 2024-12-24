import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafMandalLevelComponent } from './vaf-mandal-level.component';

describe('VafMandalLevelComponent', () => {
  let component: VafMandalLevelComponent;
  let fixture: ComponentFixture<VafMandalLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafMandalLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafMandalLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
