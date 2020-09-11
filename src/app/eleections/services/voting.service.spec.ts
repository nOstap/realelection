import { TestBed } from '@angular/core/testing';
import { VotingService } from './voting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VotingService', () => {
  let service: VotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    }).compileComponents();
    service = TestBed.inject(VotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe(`vote()`, () => {
  //   it(`should emit hasVoted$ to true after it's executed`, async () => {
  //     const hasVotedSpy = spyOn(service.hasVoted$, 'next');
  //     await service.vote('fooId').toPromise();
  //     expect(hasVotedSpy).toHaveBeenCalledWith(true);
  //   });
  // });
});
