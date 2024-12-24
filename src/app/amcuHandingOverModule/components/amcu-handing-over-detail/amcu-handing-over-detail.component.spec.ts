import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverDetailComponent } from './amcu-handing-over-detail.component';

describe('AmcuHandingOverDetailComponent', () => {
  let component: AmcuHandingOverDetailComponent;
  let fixture: ComponentFixture<AmcuHandingOverDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
