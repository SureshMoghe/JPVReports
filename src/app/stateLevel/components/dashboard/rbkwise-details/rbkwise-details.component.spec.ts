import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbkwiseDetailsComponent } from './rbkwise-details.component';

describe('RbkwiseDetailsComponent', () => {
  let component: RbkwiseDetailsComponent;
  let fixture: ComponentFixture<RbkwiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbkwiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbkwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
