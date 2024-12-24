import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoofRbkCountDetailsComponent } from './noof-rbk-count-details.component';

describe('NoofRbkCountDetailsComponent', () => {
  let component: NoofRbkCountDetailsComponent;
  let fixture: ComponentFixture<NoofRbkCountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoofRbkCountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoofRbkCountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
