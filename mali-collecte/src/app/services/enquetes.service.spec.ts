import { TestBed } from '@angular/core/testing';

import { EnquetesService } from './enquetes.service';

describe('EnquetesService', () => {
  let service: EnquetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
