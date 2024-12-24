import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractMandalComponent } from './building-abstract-mandal.component';

describe('BuildingAbstractMandalComponent', () => {
  let component: BuildingAbstractMandalComponent;
  let fixture: ComponentFixture<BuildingAbstractMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
