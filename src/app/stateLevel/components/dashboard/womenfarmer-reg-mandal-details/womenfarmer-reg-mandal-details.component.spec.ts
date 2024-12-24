import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegMandalDetailsComponent } from './womenfarmer-reg-mandal-details.component';

describe('WomenfarmerRegMandalDetailsComponent', () => {
  let component: WomenfarmerRegMandalDetailsComponent;
  let fixture: ComponentFixture<WomenfarmerRegMandalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegMandalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegMandalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
