import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaRbkReportsComponent } from './cheyutha-rbk-reports.component';

describe('CheyuthaRbkReportsComponent', () => {
  let component: CheyuthaRbkReportsComponent;
  let fixture: ComponentFixture<CheyuthaRbkReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaRbkReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaRbkReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
