import { TestBed } from '@angular/core/testing';

import { BuildingAbstractService } from './building-abstract.service';

describe('BuildingAbstractService', () => {
  let service: BuildingAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
