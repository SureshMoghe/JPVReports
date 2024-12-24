import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankRbkComponent } from './cheyutha-bank-rbk.component';

describe('CheyuthaBankRbkComponent', () => {
  let component: CheyuthaBankRbkComponent;
  let fixture: ComponentFixture<CheyuthaBankRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
