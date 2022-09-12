import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationAndCompetencesComponent } from './education-and-competences/education-and-competences.component';
<<<<<<< HEAD
import { CertificatesComponent } from './certificates/certificates.component';
=======
import { SkillsAndCompetencesComponent } from './skills-and-competences/skills-and-competences.component';
>>>>>>> 0b64eebb8e7e86e2bb95e581e566eff6ffc1015a

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    WorkExperienceComponent,
    EducationAndCompetencesComponent,
<<<<<<< HEAD
    CertificatesComponent
=======
    SkillsAndCompetencesComponent
>>>>>>> 0b64eebb8e7e86e2bb95e581e566eff6ffc1015a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
