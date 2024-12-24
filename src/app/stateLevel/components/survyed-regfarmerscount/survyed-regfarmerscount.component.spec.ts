import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvyedRegfarmerscountComponent } from './survyed-regfarmerscount.component';

describe('SurvyedRegfarmerscountComponent', () => {
  let component: SurvyedRegfarmerscountComponent;
  let fixture: ComponentFixture<SurvyedRegfarmerscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvyedRegfarmerscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvyedRegfarmerscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
