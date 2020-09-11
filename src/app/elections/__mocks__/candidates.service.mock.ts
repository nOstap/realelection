import { of } from 'rxjs/internal/observable/of';
import { CandidatesService } from '../service/candidates.service';
import { Candidate } from '../models/candidate.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class MockCandidatesService implements Partial<CandidatesService> {

    getCandidates(): Observable<Candidate[]> {
        return of([new Candidate('foo'), new Candidate('foo2')]);
    }
}