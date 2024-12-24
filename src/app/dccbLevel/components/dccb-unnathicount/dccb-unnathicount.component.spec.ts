import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbUnnathicountComponent } from './dccb-unnathicount.component';

describe('DccbUnnathicountComponent', () => {
  let component: DccbUnnathicountComponent;
  let fixture: ComponentFixture<DccbUnnathicountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbUnnathicountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbUnnathicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
