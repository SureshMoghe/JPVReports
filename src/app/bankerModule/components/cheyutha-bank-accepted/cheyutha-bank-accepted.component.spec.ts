import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankAcceptedComponent } from './cheyutha-bank-accepted.component';

describe('CheyuthaBankAcceptedComponent', () => {
  let component: CheyuthaBankAcceptedComponent;
  let fixture: ComponentFixture<CheyuthaBankAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
