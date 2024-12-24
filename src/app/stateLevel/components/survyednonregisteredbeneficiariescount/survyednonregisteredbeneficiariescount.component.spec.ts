import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvyednonregisteredbeneficiariescountComponent } from './survyednonregisteredbeneficiariescount.component';

describe('SurvyednonregisteredbeneficiariescountComponent', () => {
  let component: SurvyednonregisteredbeneficiariescountComponent;
  let fixture: ComponentFixture<SurvyednonregisteredbeneficiariescountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvyednonregisteredbeneficiariescountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvyednonregisteredbeneficiariescountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
