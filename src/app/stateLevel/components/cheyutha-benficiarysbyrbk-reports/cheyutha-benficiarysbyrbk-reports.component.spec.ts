import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBenficiarysbyrbkReportsComponent } from './cheyutha-benficiarysbyrbk-reports.component';

describe('CheyuthaBenficiarysbyrbkReportsComponent', () => {
  let component: CheyuthaBenficiarysbyrbkReportsComponent;
  let fixture: ComponentFixture<CheyuthaBenficiarysbyrbkReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBenficiarysbyrbkReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBenficiarysbyrbkReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
