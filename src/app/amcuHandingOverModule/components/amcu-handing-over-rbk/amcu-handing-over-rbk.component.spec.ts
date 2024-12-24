import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverRbkComponent } from './amcu-handing-over-rbk.component';

describe('AmcuHandingOverRbkComponent', () => {
  let component: AmcuHandingOverRbkComponent;
  let fixture: ComponentFixture<AmcuHandingOverRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
