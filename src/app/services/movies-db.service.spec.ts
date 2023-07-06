import { TestBed } from '@angular/core/testing';

import { MoviesDBService } from './movies-db.service';

describe('MoviesDBService', () => {
  let service: MoviesDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
