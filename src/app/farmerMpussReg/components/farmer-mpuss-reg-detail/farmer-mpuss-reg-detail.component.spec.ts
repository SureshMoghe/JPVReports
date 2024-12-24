import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegDetailComponent } from './farmer-mpuss-reg-detail.component';

describe('FarmerMpussRegDetailComponent', () => {
  let component: FarmerMpussRegDetailComponent;
  let fixture: ComponentFixture<FarmerMpussRegDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
