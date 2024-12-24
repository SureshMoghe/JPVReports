import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingRbkComponent } from './villagemeeting-rbk.component';

describe('VillagemeetingRbkComponent', () => {
  let component: VillagemeetingRbkComponent;
  let fixture: ComponentFixture<VillagemeetingRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
