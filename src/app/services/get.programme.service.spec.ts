import { TestBed } from '@angular/core/testing';

import { GetProgrammeService } from './get.programme.service';

describe('GetProgrammeService', () => {
  let service: GetProgrammeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProgrammeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
