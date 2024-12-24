import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionMandalComponent } from './bmcu-construction-mandal.component';

describe('BmcuConstructionMandalComponent', () => {
  let component: BmcuConstructionMandalComponent;
  let fixture: ComponentFixture<BmcuConstructionMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
