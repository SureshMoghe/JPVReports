import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafDistrictLevelComponent } from './vaf-district-level.component';

describe('VafDistrictLevelComponent', () => {
  let component: VafDistrictLevelComponent;
  let fixture: ComponentFixture<VafDistrictLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafDistrictLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafDistrictLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
