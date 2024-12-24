import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionRbkComponent } from './bmcu-construction-rbk.component';

describe('BmcuConstructionRbkComponent', () => {
  let component: BmcuConstructionRbkComponent;
  let fixture: ComponentFixture<BmcuConstructionRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
