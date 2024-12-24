import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDSSRBKDetailsComponent } from './mdssrbkdetails.component';

describe('MDSSRBKDetailsComponent', () => {
  let component: MDSSRBKDetailsComponent;
  let fixture: ComponentFixture<MDSSRBKDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDSSRBKDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDSSRBKDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
