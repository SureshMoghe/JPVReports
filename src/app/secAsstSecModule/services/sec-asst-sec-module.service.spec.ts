import { TestBed } from '@angular/core/testing';

import { SecAsstSecModuleService } from './sec-asst-sec-module.service';

describe('SecAsstSecModuleService', () => {
  let service: SecAsstSecModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecAsstSecModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
