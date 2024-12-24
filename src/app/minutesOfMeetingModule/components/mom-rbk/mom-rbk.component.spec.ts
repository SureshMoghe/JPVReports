import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomRbkComponent } from './mom-rbk.component';

describe('MomRbkComponent', () => {
  let component: MomRbkComponent;
  let fixture: ComponentFixture<MomRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
