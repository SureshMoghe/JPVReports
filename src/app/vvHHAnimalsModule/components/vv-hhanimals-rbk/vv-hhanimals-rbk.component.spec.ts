import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsRbkComponent } from './vv-hhanimals-rbk.component';

describe('VvHHAnimalsRbkComponent', () => {
  let component: VvHHAnimalsRbkComponent;
  let fixture: ComponentFixture<VvHHAnimalsRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
