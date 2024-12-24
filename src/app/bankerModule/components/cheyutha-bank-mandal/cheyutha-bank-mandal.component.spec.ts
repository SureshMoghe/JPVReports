import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankMandalComponent } from './cheyutha-bank-mandal.component';

describe('CheyuthaBankMandalComponent', () => {
  let component: CheyuthaBankMandalComponent;
  let fixture: ComponentFixture<CheyuthaBankMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
