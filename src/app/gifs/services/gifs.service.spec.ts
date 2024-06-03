import { TestBed } from '@angular/core/testing';

import { GifsService } from './GifsService';

describe('GifsService', () => {
  let service: GifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
