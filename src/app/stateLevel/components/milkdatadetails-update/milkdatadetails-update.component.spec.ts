import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkdatadetailsUpdateComponent } from './milkdatadetails-update.component';

describe('MilkdatadetailsUpdateComponent', () => {
  let component: MilkdatadetailsUpdateComponent;
  let fixture: ComponentFixture<MilkdatadetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkdatadetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkdatadetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
