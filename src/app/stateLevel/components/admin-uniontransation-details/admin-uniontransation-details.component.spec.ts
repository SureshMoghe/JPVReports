import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniontransationDetailsComponent } from './admin-uniontransation-details.component';

describe('AdminUniontransationDetailsComponent', () => {
  let component: AdminUniontransationDetailsComponent;
  let fixture: ComponentFixture<AdminUniontransationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniontransationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniontransationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
