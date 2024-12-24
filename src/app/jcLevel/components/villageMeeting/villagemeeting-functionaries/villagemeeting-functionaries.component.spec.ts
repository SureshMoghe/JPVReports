import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingFunctionariesComponent } from './villagemeeting-functionaries.component';

describe('VillagemeetingFunctionariesComponent', () => {
  let component: VillagemeetingFunctionariesComponent;
  let fixture: ComponentFixture<VillagemeetingFunctionariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingFunctionariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingFunctionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
