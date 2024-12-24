import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbStreenidhicountComponent } from './dccb-streenidhicount.component';

describe('DccbStreenidhicountComponent', () => {
  let component: DccbStreenidhicountComponent;
  let fixture: ComponentFixture<DccbStreenidhicountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbStreenidhicountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbStreenidhicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
