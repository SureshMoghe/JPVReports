import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHhExcelDownloadComponent } from './volunteer-hh-excel-download.component';

describe('VolunteerHhExcelDownloadComponent', () => {
  let component: VolunteerHhExcelDownloadComponent;
  let fixture: ComponentFixture<VolunteerHhExcelDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerHhExcelDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerHhExcelDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
