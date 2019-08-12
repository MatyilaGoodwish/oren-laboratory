import { TestBed } from '@angular/core/testing';

import { BlogModelService } from './blog-model.service';

describe('BlogModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogModelService = TestBed.get(BlogModelService);
    expect(service).toBeTruthy();
  });
});
