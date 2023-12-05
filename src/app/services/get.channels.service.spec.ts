import { TestBed } from '@angular/core/testing';

import { GetChannelsService } from './get.channels.service';

describe('GetChannelsService', () => {
  let service: GetChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
