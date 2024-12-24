import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalNewlyMilkPouringFarmersGridListComponent } from './mandal-newly-milk-pouring-farmers-grid-list.component';

describe('MandalNewlyMilkPouringFarmersGridListComponent', () => {
  let component: MandalNewlyMilkPouringFarmersGridListComponent;
  let fixture: ComponentFixture<MandalNewlyMilkPouringFarmersGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandalNewlyMilkPouringFarmersGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalNewlyMilkPouringFarmersGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
