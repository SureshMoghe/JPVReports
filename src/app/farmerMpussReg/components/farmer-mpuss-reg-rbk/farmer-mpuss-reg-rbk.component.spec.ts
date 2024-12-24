import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegRbkComponent } from './farmer-mpuss-reg-rbk.component';

describe('FarmerMpussRegRbkComponent', () => {
  let component: FarmerMpussRegRbkComponent;
  let fixture: ComponentFixture<FarmerMpussRegRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
