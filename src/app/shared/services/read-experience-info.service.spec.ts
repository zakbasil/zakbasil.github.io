import { TestBed } from '@angular/core/testing';

import { ReadExperienceInfoService } from './read-experience-info.service';

describe('ReadExperienceInfoService', () => {
  let service: ReadExperienceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadExperienceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});