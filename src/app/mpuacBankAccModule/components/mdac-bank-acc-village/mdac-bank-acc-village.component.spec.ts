import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacBankAccVillageComponent } from './mdac-bank-acc-village.component';

describe('MdacBankAccVillageComponent', () => {
  let component: MdacBankAccVillageComponent;
  let fixture: ComponentFixture<MdacBankAccVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacBankAccVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacBankAccVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
