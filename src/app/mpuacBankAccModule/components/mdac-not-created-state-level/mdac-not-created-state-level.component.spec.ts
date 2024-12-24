import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacNotCreatedStateLevelComponent } from './mdac-not-created-state-level.component';

describe('MdacNotCreatedStateLevelComponent', () => {
  let component: MdacNotCreatedStateLevelComponent;
  let fixture: ComponentFixture<MdacNotCreatedStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacNotCreatedStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacNotCreatedStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
