import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingSecAndAssSecComponent } from './villagemeeting-sec-and-ass-sec.component';

describe('VillagemeetingSecAndAssSecComponent', () => {
  let component: VillagemeetingSecAndAssSecComponent;
  let fixture: ComponentFixture<VillagemeetingSecAndAssSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingSecAndAssSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingSecAndAssSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
