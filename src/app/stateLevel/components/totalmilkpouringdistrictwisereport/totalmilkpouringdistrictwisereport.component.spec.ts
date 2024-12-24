import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmilkpouringdistrictwisereportComponent } from './totalmilkpouringdistrictwisereport.component';

describe('TotalmilkpouringdistrictwisereportComponent', () => {
  let component: TotalmilkpouringdistrictwisereportComponent;
  let fixture: ComponentFixture<TotalmilkpouringdistrictwisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalmilkpouringdistrictwisereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalmilkpouringdistrictwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
