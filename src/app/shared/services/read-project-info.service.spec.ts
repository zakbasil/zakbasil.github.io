import { TestBed } from '@angular/core/testing';

import { ReadProjectInfoService } from './read-project-info.service';

describe('ReadProjectInfoService', () => {
  let service: ReadProjectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadProjectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
