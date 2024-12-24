import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafDetailLevelComponent } from './vaf-detail-level.component';

describe('VafDetailLevelComponent', () => {
  let component: VafDetailLevelComponent;
  let fixture: ComponentFixture<VafDetailLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafDetailLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafDetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
