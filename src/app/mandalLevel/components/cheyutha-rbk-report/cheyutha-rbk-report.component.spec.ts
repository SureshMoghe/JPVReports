import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaRbkReportComponent } from './cheyutha-rbk-report.component';

describe('CheyuthaRbkReportComponent', () => {
  let component: CheyuthaRbkReportComponent;
  let fixture: ComponentFixture<CheyuthaRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
