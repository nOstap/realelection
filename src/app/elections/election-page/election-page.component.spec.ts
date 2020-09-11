import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CandidateBoxComponent } from '../candidate-box/candidate-box.component';
import { CandidatesService } from '../service/candidates.service';
import { MockCandidatesService } from '../__mocks__/candidates.service.mock';
import { ElectionPageComponent } from './election-page.component';


describe('ElectionPageComponent', () => {
  let component: ElectionPageComponent;
  let fixture: ComponentFixture<ElectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: CandidatesService,
          useClass: MockCandidatesService,
        }
      ],
      declarations: [ElectionPageComponent, CandidateBoxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title: "Vote for Polish President"', () => {
    const title = fixture.debugElement.query(By.css('.title'));
    expect(title.nativeElement.textContent).toEqual(`Vote for Polish President`);
  });

  it('should display two candidates of country leader candidates', () => {
    const candidateBoxes = fixture.debugElement.queryAll(By.css('app-candidate-box'));
    expect(candidateBoxes.length).toEqual(2);
  });

  it('should pass 2 candidates to candidate-boxes', () => {
    const candidateBoxOne = (fixture.debugElement.query(By.css('.candidate-one'))).injector.get(CandidateBoxComponent);
    const candidateBoxTwo = (fixture.debugElement.query(By.css('.candidate-two'))).injector.get(CandidateBoxComponent);

    expect(candidateBoxOne.candidate).toEqual(component.candidateOne);
    expect(candidateBoxTwo.candidate).toEqual(component.candidateTwo);
  });

});
