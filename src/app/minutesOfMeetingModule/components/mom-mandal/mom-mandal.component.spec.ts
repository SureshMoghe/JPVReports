import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomMandalComponent } from './mom-mandal.component';

describe('MomMandalComponent', () => {
  let component: MomMandalComponent;
  let fixture: ComponentFixture<MomMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
