import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsClusterComponent } from './vv-hhanimals-cluster.component';

describe('VvHHAnimalsClusterComponent', () => {
  let component: VvHHAnimalsClusterComponent;
  let fixture: ComponentFixture<VvHHAnimalsClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
