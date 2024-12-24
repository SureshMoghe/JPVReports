import { TestBed } from '@angular/core/testing';

import { BuildingInspectionService } from './building-inspection.service';

describe('BuildingInspectionService', () => {
  let service: BuildingInspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingInspectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
