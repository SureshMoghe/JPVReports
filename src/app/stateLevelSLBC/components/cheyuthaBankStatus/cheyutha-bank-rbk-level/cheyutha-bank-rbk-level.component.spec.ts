import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankRbkLevelComponent } from './cheyutha-bank-rbk-level.component';

describe('CheyuthaBankRbkLevelComponent', () => {
  let component: CheyuthaBankRbkLevelComponent;
  let fixture: ComponentFixture<CheyuthaBankRbkLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankRbkLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankRbkLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
