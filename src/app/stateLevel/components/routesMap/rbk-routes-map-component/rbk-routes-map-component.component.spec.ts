import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbkRoutesMapComponentComponent } from './rbk-routes-map-component.component';

describe('RbkRoutesMapComponentComponent', () => {
  let component: RbkRoutesMapComponentComponent;
  let fixture: ComponentFixture<RbkRoutesMapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbkRoutesMapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbkRoutesMapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
