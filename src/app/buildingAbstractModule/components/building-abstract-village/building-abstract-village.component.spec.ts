import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractVillageComponent } from './building-abstract-village.component';

describe('BuildingAbstractVillageComponent', () => {
  let component: BuildingAbstractVillageComponent;
  let fixture: ComponentFixture<BuildingAbstractVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
