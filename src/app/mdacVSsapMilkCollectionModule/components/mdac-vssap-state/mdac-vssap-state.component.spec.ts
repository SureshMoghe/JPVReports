import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacVSsapStateComponent } from './mdac-vssap-state.component';

describe('MdacVSsapStateComponent', () => {
  let component: MdacVSsapStateComponent;
  let fixture: ComponentFixture<MdacVSsapStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacVSsapStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacVSsapStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
