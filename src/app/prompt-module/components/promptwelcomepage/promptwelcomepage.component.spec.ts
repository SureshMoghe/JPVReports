import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptwelcomepageComponent } from './promptwelcomepage.component';

describe('PromptwelcomepageComponent', () => {
  let component: PromptwelcomepageComponent;
  let fixture: ComponentFixture<PromptwelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptwelcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptwelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
