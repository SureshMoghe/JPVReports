import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthabenficiaryListByRbkComponent } from './cheyuthabenficiary-list-by-rbk.component';

describe('CheyuthabenficiaryListByRbkComponent', () => {
  let component: CheyuthabenficiaryListByRbkComponent;
  let fixture: ComponentFixture<CheyuthabenficiaryListByRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthabenficiaryListByRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthabenficiaryListByRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
