import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { VotingService } from 'src/app/eleections/services/voting.service';
import { Observable, Subscriber, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-candidate-box',
  templateUrl: './candidate-box.component.html',
  styleUrls: ['./candidate-box.component.scss']
})
export class CandidateBoxComponent implements OnInit, OnDestroy {
  @Input() candidate: Candidate;
  hasVoted: boolean;
  private readonly destroyed$ = new Subject<boolean>();

  constructor(
    private readonly votingService: VotingService,
  ) { }

  ngOnInit(): void {
    this.votingService.hasVoted$.pipe(takeUntil(this.destroyed$)).subscribe(hasVoted => {
      this.hasVoted = hasVoted;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  vote(): void {
    this.votingService.vote(this.candidate.id).pipe(takeUntil(this.destroyed$)).subscribe();
  }

}
