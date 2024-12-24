import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsVillageComponent } from './vv-hhanimals-village.component';

describe('VvHHAnimalsVillageComponent', () => {
  let component: VvHHAnimalsVillageComponent;
  let fixture: ComponentFixture<VvHHAnimalsVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
