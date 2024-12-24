import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomStateComponent } from './mom-state.component';

describe('MomStateComponent', () => {
  let component: MomStateComponent;
  let fixture: ComponentFixture<MomStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
