import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecDetailLevelComponent } from './sec-asst-sec-detail-level.component';

describe('SecAsstSecDetailLevelComponent', () => {
  let component: SecAsstSecDetailLevelComponent;
  let fixture: ComponentFixture<SecAsstSecDetailLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecDetailLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecDetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
