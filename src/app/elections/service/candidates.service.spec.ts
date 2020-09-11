import { TestBed } from '@angular/core/testing';

import { CandidatesService } from './candidates.service';
import { Candidate } from '../models/candidate.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CandidatesService', () => {
  let service: CandidatesService;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(CandidatesService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    httpClientMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch candidates from api', (done) => {
    const mockResponse = [new Candidate('candidate1'), new Candidate('candidate2')];

    const  request = httpClientMock.expectOne(`/candidates`);

    service.getCandidates().subscribe((candidates) => {
      expect(candidates).toEqual(mockResponse);
    });

    request.flush('foo');

    httpClientMock.verify();
  });
});
