import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndCompetencesComponent } from './education-and-competences.component';

describe('EducationAndCompetencesComponent', () => {
  let component: EducationAndCompetencesComponent;
  let fixture: ComponentFixture<EducationAndCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
