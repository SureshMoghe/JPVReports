import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecheyuthabeneficiariescountComponent } from './statecheyuthabeneficiariescount.component';

describe('StatecheyuthabeneficiariescountComponent', () => {
  let component: StatecheyuthabeneficiariescountComponent;
  let fixture: ComponentFixture<StatecheyuthabeneficiariescountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecheyuthabeneficiariescountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecheyuthabeneficiariescountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
