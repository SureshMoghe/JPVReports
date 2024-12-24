import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegMandalReportsComponent } from './womenfarmer-reg-mandal-reports.component';

describe('WomenfarmerRegMandalReportsComponent', () => {
  let component: WomenfarmerRegMandalReportsComponent;
  let fixture: ComponentFixture<WomenfarmerRegMandalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegMandalReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegMandalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
