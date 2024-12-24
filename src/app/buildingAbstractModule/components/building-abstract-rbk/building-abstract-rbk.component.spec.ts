import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractRbkComponent } from './building-abstract-rbk.component';

describe('BuildingAbstractRbkComponent', () => {
  let component: BuildingAbstractRbkComponent;
  let fixture: ComponentFixture<BuildingAbstractRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
