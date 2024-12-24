import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSMSCodesComponent } from './admin-smscodes.component';

describe('AdminSMSCodesComponent', () => {
  let component: AdminSMSCodesComponent;
  let fixture: ComponentFixture<AdminSMSCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSMSCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSMSCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
