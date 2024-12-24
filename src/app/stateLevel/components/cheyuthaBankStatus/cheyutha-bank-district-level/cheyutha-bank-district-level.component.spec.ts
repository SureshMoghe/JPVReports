import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankDistrictLevelComponent } from './cheyutha-bank-district-level.component';

describe('CheyuthaBankDistrictLevelComponent', () => {
  let component: CheyuthaBankDistrictLevelComponent;
  let fixture: ComponentFixture<CheyuthaBankDistrictLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankDistrictLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankDistrictLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
