import { TestBed } from '@angular/core/testing';

import { CalibrationModuleService } from './calibration-module.service';

describe('CalibrationModuleService', () => {
  let service: CalibrationModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalibrationModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
