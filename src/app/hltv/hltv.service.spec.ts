import { TestBed, inject } from '@angular/core/testing';

import { HltvService } from './hltv.service';

describe('HltvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HltvService]
    });
  });

  it('should be created', inject([HltvService], (service: HltvService) => {
    expect(service).toBeTruthy();
  }));
});
