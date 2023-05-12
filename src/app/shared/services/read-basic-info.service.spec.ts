import { TestBed } from '@angular/core/testing';

import { ReadBasicInfoService } from './read-basic-info.service';

describe('ReadBasicInfoService', () => {
  let service: ReadBasicInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadBasicInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
