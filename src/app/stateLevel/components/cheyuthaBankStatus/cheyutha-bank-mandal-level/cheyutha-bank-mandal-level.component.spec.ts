import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankMandalLevelComponent } from './cheyutha-bank-mandal-level.component';

describe('CheyuthaBankMandalLevelComponent', () => {
  let component: CheyuthaBankMandalLevelComponent;
  let fixture: ComponentFixture<CheyuthaBankMandalLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankMandalLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankMandalLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
