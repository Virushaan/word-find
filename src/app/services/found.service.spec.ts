import { TestBed, inject } from '@angular/core/testing';

import { FoundService } from './found.service';

describe('FoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoundService]
    });
  });

  it('should be created', inject([FoundService], (service: FoundService) => {
    expect(service).toBeTruthy();
  }));
});
