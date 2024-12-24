import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankRejectedComponent } from './cheyutha-bank-rejected.component';

describe('CheyuthaBankRejectedComponent', () => {
  let component: CheyuthaBankRejectedComponent;
  let fixture: ComponentFixture<CheyuthaBankRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
