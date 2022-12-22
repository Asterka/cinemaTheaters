import { TestBed } from '@angular/core/testing';

import { CinemaFacadeService } from './cinema-facade.service';

describe('CinemaFacadeService', () => {
  let service: CinemaFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
