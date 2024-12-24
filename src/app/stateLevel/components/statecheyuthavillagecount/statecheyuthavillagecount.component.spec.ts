import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecheyuthavillagecountComponent } from './statecheyuthavillagecount.component';

describe('StatecheyuthavillagecountComponent', () => {
  let component: StatecheyuthavillagecountComponent;
  let fixture: ComponentFixture<StatecheyuthavillagecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecheyuthavillagecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecheyuthavillagecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
