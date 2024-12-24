import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingVillageComponent } from './villagemeeting-village.component';

describe('VillagemeetingVillageComponent', () => {
  let component: VillagemeetingVillageComponent;
  let fixture: ComponentFixture<VillagemeetingVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
