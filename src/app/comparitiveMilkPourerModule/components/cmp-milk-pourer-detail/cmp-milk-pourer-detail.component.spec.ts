import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMilkPourerDetailComponent } from './cmp-milk-pourer-detail.component';

describe('CmpMilkPourerDetailComponent', () => {
  let component: CmpMilkPourerDetailComponent;
  let fixture: ComponentFixture<CmpMilkPourerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpMilkPourerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMilkPourerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
