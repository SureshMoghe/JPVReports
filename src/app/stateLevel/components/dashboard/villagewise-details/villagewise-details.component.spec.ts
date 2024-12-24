import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagewiseDetailsComponent } from './villagewise-details.component';

describe('VillagewiseDetailsComponent', () => {
  let component: VillagewiseDetailsComponent;
  let fixture: ComponentFixture<VillagewiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagewiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagewiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
