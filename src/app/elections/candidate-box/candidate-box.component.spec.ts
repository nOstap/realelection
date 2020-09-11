import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { VotingService } from 'src/app/eleections/services/voting.service';
import { Candidate } from '../models/candidate.model';
import { CandidateBoxComponent } from './candidate-box.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CandidateBoxComponent', () => {
  let component: CandidateBoxComponent;
  let fixture: ComponentFixture<CandidateBoxComponent>;
  let votingService: VotingService;
  const voteButton = () => fixture.debugElement.query(By.css('button.vote-btn'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateBoxComponent],
      providers: [VotingService],
      imports: [
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateBoxComponent);
    votingService = TestBed.inject(VotingService);
    component = fixture.componentInstance;
    component.candidate = new Candidate('foo');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display photo of candidate', () => {
    fixture.detectChanges();
    const candidatePhoto = fixture.debugElement.query(By.css('img.candidate-image'));
    expect(candidatePhoto.attributes.src).toEqual(component.candidate.photoSrc);
  });

  describe(`Vote Button`, () => {
    it('should display `Vote` button', () => {
      expect(voteButton()).toBeTruthy();
      expect(voteButton().nativeElement.textContent).toEqual(`Vote`);
    });

    it('should make a vote', () => {
      // tslint:disable-next-line: no-shadowed-variable
      const obrv = new Observable<void>((sub) => {
        sub.next(null);
        sub.complete();
      });
      const votingSpy = spyOn(votingService, 'vote').and.returnValue(obrv);
      voteButton().nativeElement.click();
      expect(votingSpy).toHaveBeenCalledWith(component.candidate.id);
    });

    it('should become disabled if user already voted', () => {
      expect(voteButton().nativeElement.disabled).toBe(false);
      component.hasVoted = true;
      fixture.detectChanges();
      expect(voteButton().nativeElement.disabled).toBe(true);
    });

    it(`should display "[number of votes] Votes" if user already voted`, () => {
      component.hasVoted = true;
      fixture.detectChanges();

      expect(voteButton().nativeElement.textContent).toEqual(`${component.candidate.votes} Votes`);
    });

  });

});
