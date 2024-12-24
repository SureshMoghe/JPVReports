import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbSurvyednonregisteredbeneficiariescountComponent } from './dccb-survyednonregisteredbeneficiariescount.component';

describe('DccbSurvyednonregisteredbeneficiariescountComponent', () => {
  let component: DccbSurvyednonregisteredbeneficiariescountComponent;
  let fixture: ComponentFixture<DccbSurvyednonregisteredbeneficiariescountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbSurvyednonregisteredbeneficiariescountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbSurvyednonregisteredbeneficiariescountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
