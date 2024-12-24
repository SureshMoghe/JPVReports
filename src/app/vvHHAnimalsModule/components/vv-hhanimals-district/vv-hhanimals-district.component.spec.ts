import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsDistrictComponent } from './vv-hhanimals-district.component';

describe('VvHHAnimalsDistrictComponent', () => {
  let component: VvHHAnimalsDistrictComponent;
  let fixture: ComponentFixture<VvHHAnimalsDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
