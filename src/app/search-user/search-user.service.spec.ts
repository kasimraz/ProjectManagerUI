import { TestBed } from '@angular/core/testing';

import { SearchUserService } from './search-user.service';

describe('SearchUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchUserService = TestBed.get(SearchUserService);
    expect(service).toBeTruthy();
  });
});
