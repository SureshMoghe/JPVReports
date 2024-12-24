import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmilkpouringfarmerbydistidwisereportComponent } from './totalmilkpouringfarmerbydistidwisereport.component';

describe('TotalmilkpouringfarmerbydistidwisereportComponent', () => {
  let component: TotalmilkpouringfarmerbydistidwisereportComponent;
  let fixture: ComponentFixture<TotalmilkpouringfarmerbydistidwisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalmilkpouringfarmerbydistidwisereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalmilkpouringfarmerbydistidwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
