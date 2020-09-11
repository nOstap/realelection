import { Injectable } from '@angular/core';
import { Candidate } from 'src/app/elections/models/candidate.model';
import { Observable, Subject, of } from 'rxjs';
import { finalize, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  hasVoted$ = new Subject<boolean>();

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  vote(candidateId: string): Observable<void> {
    return this.httpClient.post('foo', {
      candidateId,
    }).pipe(
      map(() => undefined),
      finalize(() => {
        this.hasVoted$.next(true);
      }),
    );
    console.log(`You have voted for ${candidateId}!`);
  }
}
