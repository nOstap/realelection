import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { CandidatesService } from '../service/candidates.service';

@Component({
  selector: 'app-election-page',
  templateUrl: './election-page.component.html',
  styleUrls: ['./election-page.component.scss']
})
export class ElectionPageComponent implements OnInit {
  candidateOne: Candidate;
  candidateTwo: Candidate;

  constructor(
    private readonly candidatesService: CandidatesService
  ) { }

  ngOnInit(): void {
    this.candidatesService.getCandidates().subscribe(candidates => {
      this.candidateOne = candidates.pop();
      this.candidateTwo = candidates.pop();
    });
  }

}
