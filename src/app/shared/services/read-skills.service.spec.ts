import { TestBed } from '@angular/core/testing';

import { ReadSkillsService } from './read-skills.service';

describe('ReadSkillsService', () => {
  let service: ReadSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
