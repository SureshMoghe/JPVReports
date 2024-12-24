import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegRbkDetailsComponent } from './womenfarmer-reg-rbk-details.component';

describe('WomenfarmerRegRbkDetailsComponent', () => {
  let component: WomenfarmerRegRbkDetailsComponent;
  let fixture: ComponentFixture<WomenfarmerRegRbkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegRbkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegRbkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
