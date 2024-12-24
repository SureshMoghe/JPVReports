import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbSurvyedRegfarmerscountComponent } from './dccb-survyed-regfarmerscount.component';

describe('DccbSurvyedRegfarmerscountComponent', () => {
  let component: DccbSurvyedRegfarmerscountComponent;
  let fixture: ComponentFixture<DccbSurvyedRegfarmerscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbSurvyedRegfarmerscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbSurvyedRegfarmerscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
