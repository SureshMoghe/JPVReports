import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacNotCreatedRbkListComponent } from './mdac-not-created-rbk-list.component';

describe('MdacNotCreatedRbkListComponent', () => {
  let component: MdacNotCreatedRbkListComponent;
  let fixture: ComponentFixture<MdacNotCreatedRbkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacNotCreatedRbkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacNotCreatedRbkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
