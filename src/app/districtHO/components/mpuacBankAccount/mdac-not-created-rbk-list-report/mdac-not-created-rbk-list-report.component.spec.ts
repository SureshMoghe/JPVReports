import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacNotCreatedRbkListReportComponent } from './mdac-not-created-rbk-list-report.component';

describe('MdacNotCreatedRbkListReportComponent', () => {
  let component: MdacNotCreatedRbkListReportComponent;
  let fixture: ComponentFixture<MdacNotCreatedRbkListReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacNotCreatedRbkListReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacNotCreatedRbkListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
