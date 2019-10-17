import { TestBed } from '@angular/core/testing';

import { AddEducationService } from './add-education.service';

describe('AddEducationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEducationService = TestBed.get(AddEducationService);
    expect(service).toBeTruthy();
  });
});
