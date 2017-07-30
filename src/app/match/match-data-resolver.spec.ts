import { TestBed, async, inject } from '@angular/core/testing';

import { MatchDataResolver } from './match-data-resolver';

describe('MatchDataResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchDataResolver]
    });
  });

  it('should ...', inject([MatchDataResolver], (guard: MatchDataResolver) => {
    expect(guard).toBeTruthy();
  }));
});
