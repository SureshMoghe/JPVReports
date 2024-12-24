import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecheyuthaJpvRegisteredfarmerountComponent } from './statecheyutha-jpv-registeredfarmerount.component';

describe('StatecheyuthaJpvRegisteredfarmerountComponent', () => {
  let component: StatecheyuthaJpvRegisteredfarmerountComponent;
  let fixture: ComponentFixture<StatecheyuthaJpvRegisteredfarmerountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecheyuthaJpvRegisteredfarmerountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecheyuthaJpvRegisteredfarmerountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
