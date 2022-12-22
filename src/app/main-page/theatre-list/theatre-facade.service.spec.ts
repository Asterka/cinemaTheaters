import { TestBed } from '@angular/core/testing';

import { TheatreFacadeService } from './theatre-facade.service';

describe('TheatreFacadeService', () => {
  let service: TheatreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheatreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
