import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationAndCompetencesComponent } from './education-and-competences/education-and-competences.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SkillsAndCompetencesComponent } from './skills-and-competences/skills-and-competences.component';
import { LenguagesComponent } from './lenguages/lenguages.component';
@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    WorkExperienceComponent,
    EducationAndCompetencesComponent,
    CertificatesComponent,
    SkillsAndCompetencesComponent,
    LenguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
