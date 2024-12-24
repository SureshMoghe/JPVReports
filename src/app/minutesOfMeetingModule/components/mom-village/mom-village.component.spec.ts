import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomVillageComponent } from './mom-village.component';

describe('MomVillageComponent', () => {
  let component: MomVillageComponent;
  let fixture: ComponentFixture<MomVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
