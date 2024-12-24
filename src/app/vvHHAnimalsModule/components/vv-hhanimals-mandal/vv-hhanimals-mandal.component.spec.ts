import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsMandalComponent } from './vv-hhanimals-mandal.component';

describe('VvHHAnimalsMandalComponent', () => {
  let component: VvHHAnimalsMandalComponent;
  let fixture: ComponentFixture<VvHHAnimalsMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
