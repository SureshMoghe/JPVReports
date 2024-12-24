import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbcheyuthavillagecountComponent } from './dccbcheyuthavillagecount.component';

describe('DccbcheyuthavillagecountComponent', () => {
  let component: DccbcheyuthavillagecountComponent;
  let fixture: ComponentFixture<DccbcheyuthavillagecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbcheyuthavillagecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbcheyuthavillagecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
