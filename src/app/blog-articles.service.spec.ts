import { TestBed } from '@angular/core/testing';

import { BlogArticlesService } from './blog-articles.service';

describe('BlogArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogArticlesService = TestBed.get(BlogArticlesService);
    expect(service).toBeTruthy();
  });
  
});
