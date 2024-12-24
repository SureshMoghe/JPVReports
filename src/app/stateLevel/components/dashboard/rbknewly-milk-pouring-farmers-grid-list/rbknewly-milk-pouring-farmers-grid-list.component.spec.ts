import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBKNewlyMilkPouringFarmersGridListComponent } from './rbknewly-milk-pouring-farmers-grid-list.component';

describe('RBKNewlyMilkPouringFarmersGridListComponent', () => {
  let component: RBKNewlyMilkPouringFarmersGridListComponent;
  let fixture: ComponentFixture<RBKNewlyMilkPouringFarmersGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBKNewlyMilkPouringFarmersGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBKNewlyMilkPouringFarmersGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
