import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecheyuthabeneRegjpvfarmerChangecountComponent } from './statecheyuthabene-regjpvfarmer-changecount.component';

describe('StatecheyuthabeneRegjpvfarmerChangecountComponent', () => {
  let component: StatecheyuthabeneRegjpvfarmerChangecountComponent;
  let fixture: ComponentFixture<StatecheyuthabeneRegjpvfarmerChangecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecheyuthabeneRegjpvfarmerChangecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecheyuthabeneRegjpvfarmerChangecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
