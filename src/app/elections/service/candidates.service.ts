import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getCandidates(): Observable<Candidate[]> {
    const GET_CANDIDAES_QUERY = `https://realelection.azurewebsites.net/api/get-candidates-query?code=cK5tjJkbyeYTs1637I0S/eq6sDpUTwdQbxxRnq/EpvVMB6od9ZWDrw==`;
    return this.httpClient.get<Candidate[]>(GET_CANDIDAES_QUERY).pipe(
      map(response => {
        console.log(response);
        return response.map(c => {
          const candidate = new Candidate(c);
          return candidate;
        })
      })
    )
  }

}
