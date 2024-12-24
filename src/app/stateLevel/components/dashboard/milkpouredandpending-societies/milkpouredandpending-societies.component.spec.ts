import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkpouredandpendingSocietiesComponent } from './milkpouredandpending-societies.component';

describe('MilkpouredandpendingSocietiesComponent', () => {
  let component: MilkpouredandpendingSocietiesComponent;
  let fixture: ComponentFixture<MilkpouredandpendingSocietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkpouredandpendingSocietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkpouredandpendingSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
