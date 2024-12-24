import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsClusterReportComponent } from './vv-hhanimals-cluster-report.component';

describe('VvHHAnimalsClusterReportComponent', () => {
  let component: VvHHAnimalsClusterReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsClusterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsClusterReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsClusterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
